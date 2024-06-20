import axios, { AxiosInstance } from 'axios';
import { select } from 'redux-saga/effects';
import { config } from '../constants';
import {
  Course,
  LessonsScheduleItem,
  DayLessonsDetails,
  StaffLessonsAttendanceSummary,
  LessonDetails,
  StudentAttendanceListItemDetails,
  StudentAttendanceByLessonsDetails,
  ApiResponse,
  StudentLegacy,
  StudentAttendanceSummary,
  UserShortDetails,
  LessonAttendanceHistoryItem,
  StudentAttendanceApprovalDetails,
  AttendanceStatus,
  StaffStudentAttendanceByCourse,
  ApprovalsStudent,
  BeaconDetails
} from '../constants/types';

export type GetLessonDetailsPayload = {
  lessonId: number;
};

export type GetStudentLessonsAttendanceHistoryPayload = {
  studentId: number;
  date?: string;
};

export type GetStudentAttendanceSummaryPayload = {
  studentId: number;
};

export type GetUserShortDetailsPayload = {
  userId: number;
};

export type GetStudentOutstandingLessonPayload = {
  studentId: number;
};

export type GetStudentApprovalDetailsPayload = {
  studentId: number;
  lessonId: number;
  date?: string;
};

export type UpdateStudentAttendancePayload = {
  status: AttendanceStatus;
  lessonId: number;
  studentId: number;
  date: string;
  message?: string;
};

export type GetStaffStudentsAttendanceByCoursePayload = {
  courseId?: number;
};

export type StopLessonPayload = {
  lessonId: number;
};

export type SendStudentReminder = {
  lessonId: number;
};

export type CheckLessonOnlineAttendancePayload = {
  lessonId: number;
};

export type LessonOnlineAttendanceCheckResult = {
  verified: number;
  absent: number;
};

class Attendance {
  private axios: AxiosInstance;

  private api: string = config.attendanceUrl;

  constructor(token: string) {
    this.axios = axios.create({
      headers: {
        common: {
          authorization: `Bearer ${token}`
        }
      },
      baseURL: config.attendanceUrl
    });
  }

  public static*getInstance() {
    const getToken = (state: any) => state.Auth.authToken;
    const model = new Attendance(yield select(getToken));
    return model;
  }

  public async searchFace(filePath: string) {
    const form = new FormData();
    form.append('file', {
      uri: filePath,
      type: 'image/jpg',
      name: 'image.jpg'
    });

    const res = await this.axios.post('/students/search', form, {
      headers: {
        'Content-Type': `multipart/form-data;boundary=${form._boundary}`
      }
    });
    return res.data;
  }

  public async addUser(filePath: any) {
    const form = new FormData();
    form.append('file', {
      uri: filePath,
      type: 'image/jpg',
      name: 'image.jpg'
    });

    const res = await this.axios.post('/students/get-or-create', form, {
      headers: {
        'Content-Type': `multipart/form-data;boundary=${form._boundary}`
      }
    });
    return res.data;
  }

  public async approve(id: number) {
    const res = await this.axios.post(`/students/approve/${id}`);
    return res.data;
  }

  public async reject(id: number) {
    const res = await this.axios.post(`/students/reject/${id}`);
    return res.data;
  }

  public async updateSnapshot(classId: number) {
    const res = await this.axios.post(`/snapshots/class/${classId}/update`);
    return res.data;
  }

  public async getSnapshot(classId: number) {
    const res = await this.axios.get(`/snapshots/class/${classId}/get`);
    return res.data;
  }

  public async deleteSnapshot(classId: number) {
    const res = await this.axios.delete(`/snapshots/class/${classId}/delete`);
    return res.data;
  }

  public async deletesSingleSnapshot(id: number) {
    const res = await this.axios.delete(`/snapshots/${id}/delete`);
    return res.data;
  }

  public async checkout(attendanceId: number) {
    const res = await this.axios.post(`/students/checkout/${attendanceId}`);
    return res.data;
  }

  public async checkin(classId: number, faceToken: number) {
    const payload = {
      class_id: classId,
      face_token: faceToken
    };
    const res = await this.axios.post('/students/checkin', payload);
    return res.data;
  }

  public async replaceClass(data: any) {
    const payload = {
      ...data
    };
    console.log('@@@@@@@@@@@ replaceClass', data);
    const res = await this.axios.post('/classes/replace', payload);
    return res.data;
  }

  public async getClassesByBeaconIds(ids: number[]) {
    const res = await this.axios.get(
      `/classes/get-all?beaconIds=${ids.join(',')}`
    );
    return res.data;
  }

  public getBeaconsByCollegeId = async (): Promise<BeaconDetails[]> => {
    const res = await this.axios.get('/beacons/get-all');
    return res.data;
  };

  public async getUsersByClassId(classId: number) {
    const res = await this.axios.get(`/by-class/${classId}`);
    return res.data;
  }

  public async getApprovalList() {
    const res = await this.axios.get('/students/approval-list');
    return res.data;
  }

  public async getAttendanceDetails() {
    const res = await this.axios.get('/students/attendance/details');
    return res.data;
  }

  public async getAttendanceSummaryDA() {
    const res = await this.axios.get('/students/attendance/summary/da');
    return res.data;
  }

  public async getAttendanceSummaryCA() {
    const res = await this.axios.get('/students/attendance/summary/ca');
    return res.data;
  }

  public getCourses = async (): Promise<ApiResponse<Course[]>> => {
    const res = await this.axios.get('/courses/all');

    return res.data;
  };

  public createClass = async (payload: any): Promise<ApiResponse<any>> => {
    const res = await this.axios.request({
      url: '/classes/add',
      method: 'post',
      data: payload
    });

    return res.data;
  };

  public getLessonsSchedule = async (): Promise<
    ApiResponse<LessonsScheduleItem[]>
  > => {
    const res = await this.axios.request({
      url: '/lessons/schedule',
      method: 'get'
    });

    return res.data;
  };

  public getLessonsHistory = async (): Promise<
    ApiResponse<DayLessonsDetails[]>
  > => {
    const res = await this.axios.request({
      url: '/lessons/history',
      method: 'get'
    });

    return res.data;
  };

  public getStaffStudentsTodayAttendance = async (): Promise<
    ApiResponse<StudentLegacy[]>
  > => {
    const res = await this.axios.get(
      '/students/staff-students/today-attendance'
    );
    return res.data;
  };

  public getStaffLessonsAttendanceSummary = async (): Promise<
    ApiResponse<StaffLessonsAttendanceSummary>
  > => {
    const res = await this.axios.get('/lessons/summary');
    return res.data;
  };

  public getStaffStudentsAwaitingApproval = async (): Promise<
    ApiResponse<ApprovalsStudent[]>
  > => {
    const res = await this.axios.get(
      '/students/staff-students/awaiting-approval'
    );
    return res.data;
  };

  public getLessonDetails = async (
    payload: GetLessonDetailsPayload
  ): Promise<ApiResponse<LessonDetails>> => {
    const res = await this.axios.get(`/lessons/${payload.lessonId}/details`);
    return res.data;
  };

  public getLessonStudentsAll = async (
    payload: GetLessonDetailsPayload
  ): Promise<ApiResponse<StudentAttendanceListItemDetails[]>> => {
    const res = await this.axios.get(
      `/lessons/${payload.lessonId}/students/all`
    );
    return res.data;
  };

  public getStudentLessonsAttendanceHistroy = async (
    payload: GetStudentLessonsAttendanceHistoryPayload
  ): Promise<ApiResponse<LessonAttendanceHistoryItem[]>> => {
    const res = await this.axios.get(
      `/students/${payload.studentId}/lessons-attendance-history`,
      {
        params: {
          date: payload.date
        }
      }
    );
    return res.data;
  };

  public getStudentAttendanceSummary = async (
    payload: GetStudentAttendanceSummaryPayload
  ): Promise<ApiResponse<StudentAttendanceSummary>> => {
    const res = await this.axios.get(
      `/students/${payload.studentId}/attendance-summary`
    );

    return res.data;
  };

  public getUserShortDetails = async (
    payload: GetUserShortDetailsPayload
  ): Promise<ApiResponse<UserShortDetails>> => {
    const res = await this.axios.get(
      `/students/${payload.userId}/short-details`
    );

    return res.data;
  };

  public getStudentOutstandingLessons = async (
    payload: GetStudentOutstandingLessonPayload
  ): Promise<ApiResponse<StudentAttendanceByLessonsDetails>> => {
    const res = await this.axios.get(
      `/students/${payload.studentId}/outstanding-lessons`
    );
    return res.data;
  };

  public getStudentApprovalDetails = async ({
    studentId,
    lessonId,
    date
  }: GetStudentApprovalDetailsPayload): Promise<
    ApiResponse<StudentAttendanceApprovalDetails>
  > => {
    const res = await this.axios.get(
      `/students/${studentId}/approval-details`,
      {
        params: { lessonId, date }
      }
    );

    return res.data;
  };

  public updateStudentAttendance = async (
    payload: UpdateStudentAttendancePayload
  ): Promise<ApiResponse> => {
    const res = await this.axios.request({
      method: 'post',
      url: '/students/update-attendance',
      data: payload
    });

    return res.data;
  };

  public getStaffStudentsAttendanceByCourse = async ({
    courseId
  }: GetStaffStudentsAttendanceByCoursePayload): Promise<
    ApiResponse<StaffStudentAttendanceByCourse[]>
  > => {
    const res = await this.axios.get(
      '/students/staff-students/attendance-by-course',
      {
        params: { courseId }
      }
    );

    return res.data;
  };

  public stopLesson = async ({
    lessonId
  }: StopLessonPayload): Promise<ApiResponse> => {
    const res = await this.axios.request({
      url: '/lessons/stop',
      method: 'post',
      data: { lessonId }
    });

    return res.data;
  };

  public sendStudentsReminder = async ({
    lessonId
  }: SendStudentReminder): Promise<ApiResponse> => {
    const res = await this.axios.request({
      url: '/lessons/send-students-reminder',
      method: 'post',
      data: { lessonId }
    });

    return res.data;
  };

  public checkLessonOnlineAttendance = async ({
    lessonId
  }: CheckLessonOnlineAttendancePayload): Promise<
    ApiResponse<LessonOnlineAttendanceCheckResult>
  > => {
    const res = await this.axios.request({
      url: '/lessons/check-online-attendance',
      method: 'post',
      data: {
        lessonId
      }
    });
    return res.data;
  };

  public getStaffPersonalVirtualBeacon = async (): Promise<
    ApiResponse<BeaconDetails>
  > => {
    const res = await this.axios.request({
      url: '/beacons/personal'
    });

    return res.data;
  };

  public getLessonsByBeaconIds = async (
    beaconIds: number[]
  ): Promise<ApiResponse<LessonDetails[]>> => {
    const res = await this.axios.request({
      method: 'post',
      url: '/lessons/by-beacons',
      data: {
        beaconIds
      }
    });

    return res.data;
  };
}

export default Attendance;
