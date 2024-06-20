import { ImageSourcePropType } from 'react-native';

export type School = {
  id: string;
  name: string;
  address: string;
  logo: ImageSourcePropType;
  slug: string;
};

export type Status = 'approved' | 'irregular' | 'rejected';

export type DailyClassAttendance = {
  date: Date;
  hours: number;
  status: Status;
};

export type WeeklyClassAttendance = {
  week: string;
  totalHours: number;
  data: Array<DailyClassAttendance>;
};

export type MonthlyClassAttendance = {
  month: number;
  data: Array<WeeklyClassAttendance>;
};

export type Beacon = {
  name: string;
  title: string;
};

export type Hotspot = {
  name: string;
  description: string;
};

export type Class = {
  name: string;
  description: string;
};

export type HotspotConfig = {
  title: string;
  instructor: string;
  classStart: string;
  classEnd: string;
  gracePeriodStart: string;
  gracePeriodEnd: string;
};

export type StudentLegacy = {
  id: number;
  first_name: string;
  last_name: string;
  campus?: string;
  status: Status;
  photo?: string;
};

export type ApprovalsStudent = {
  id: number;
  firstName: string;
  lastName: string;
  campus?: string;
  photo?: string;
};

export type UserShortDetails = {
  id: number;
  firstName: string;
  lastName: string;
  campus?: string;
  photo?: string;
};

export enum StudentFullRole {
  CA = 'STUDENT_CA',
  DA = 'STUDENT_DA'
}

export enum StaffFullRole {
  CA = 'STAFF_CA',
  DA = 'STAFF_DA'
}

export type UserFullRole =
  | StudentFullRole.CA
  | StudentFullRole.DA
  | StaffFullRole.CA
  | StaffFullRole.DA;

export enum UserRole {
  Student = 'student',
  Staff = 'staff'
}

export type User = {
  role: UserRole;
  full_role: UserFullRole;
};

export type StreamCourseCredentials = {
  key: string;
  url: string;
};

export type Course = {
  id: number;
  name: string;
  streamCredentials: StreamCourseCredentials[];
};

export enum Weekday {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6
}

export enum LessonType {
  Online = 'online',
  Beacon = 'beacon'
}

export type LessonDetails = {
  id: string;
  course: Course;
  type: LessonType;
  onlineVideoUrl?: string;
  startsAt: string;
  endsAt: string;
  startGracePeriod: number;
  endGracePeriod: number;
};

export type Option = {
  value: number | string;
  label: string;
};

export enum OnlineVerificationFrequency {
  Manual = -1,
  Random = 0,
  Interval15Mins = 15,
  Interval30Mins = 30,
  Interval45Mins = 45,
  Interval60Mins = 60
}

export type LessonsScheduleItem = {
  id: number;
  courseId: number;
  name: string;
  type: LessonType;
  room: string;
  startsAt: string;
  endsAt: string;
  active: boolean;
};

export type DayLessonsDetails = {
  date: string;
  data: LessonsScheduleItem[];
};

export type StaffLessonsAttendanceSummary = {
  attendanceRating: number;
  approvals: number;
  upcomingLesson: {
    id: number;
    time: string;
    course_id: number;
    name: string;
  };
  previousLesson: {
    id: number;
    time: string;
    course_id: number;
    name: string;
  };
};

export type StudentAttendanceListItemDetails = {
  id: number;
  firstName: string;
  lastName: string;
  inTime?: string;
  outTime?: string;
  lessonType: LessonType;
  verified: boolean;
};

export type LessonAttendanceDetails = {
  id: number;
  type: LessonType;
  courseId: number;
  date: string;
  startsAt: string;
  endsAt: string;
  verified?: boolean;
};

export type LessonAttendanceHistoryItem = {
  course: Course;
  type: LessonType;
  courseId: number;
  date: string;
  startsAt: string;
  endsAt: string;
  verified?: boolean;
};

export type StudentAttendanceByLessonsDetails = Array<{
  course: Course;
  data: Array<LessonAttendanceDetails>;
}>;

export enum ErrorType {
  Error = 'error',
  ValidationError = 'validation_error'
}

type ApiErrorValidation = {
  type: ErrorType.ValidationError;
  details: Array<{
    message: string;
  }>;
};

export type ApiResponseValidationError = {
  success: false;
  error: ApiErrorValidation;
};

export type GeneralApiError = {
  type?: ErrorType.Error;
  details: any;
};
export type ApiResponseGeneralError = {
  success: false;
  error: GeneralApiError;
};

export type ApiResponseError =
  | ApiResponseGeneralError
  | ApiResponseValidationError;

export type ApiError = ApiResponseError['error'];

export type ApiResponseSuccess<T = any> = {
  success: true;
  data: T;
};

export type ApiResponse<DataT = any> =
  | ApiResponseSuccess<DataT>
  | ApiResponseError;

export type StudentAttendanceSummary = {
  firstName: string;
  lastName: string;
  campus: string;
  photo: string;
  attendedHours: number;
  totalHours: number;
};

export enum AttendanceStatus {
  InClass = 'in_class',
  Irregular = 'irregular',
  Rejected = 'rejected',
  Approved = 'approved'
}

export type StudentAttendanceApprovalItem = {
  id: number;
  status: AttendanceStatus;
  createdAt: string;
};

export type StudentAttendanceApprovalDetails = {
  student: UserShortDetails;
  lesson: {
    id: number;
    courseId: number;
    type: LessonType;
    startsAt: string;
    endsAt: string;
    courseName: string;
  };
  attendance: StudentAttendanceApprovalItem[];
};

export type StaffStudentAttendanceByCourseItem = {
  lesson: {
    id: number;
    type: LessonType;
    startsAt: string;
    endsAt: string;
  };
  date: string;
  student: {
    id: number;
    firstName: string;
    lastName: string;
  };
};
export type StaffStudentAttendanceByCourse = {
  course: Course;
  data: StaffStudentAttendanceByCourseItem[];
};

export enum BeaconType {
  Physical = 'physical',
  Virtual = 'virtual'
}

export type BeaconDetails = {
  id: number;
  type: BeaconType;
  name: string;
  location: string;
  uuid: string;
  major: number;
  minor: number;
};
