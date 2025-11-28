// 로컬스토리지 관리 유틸리티

export interface User {
  id: string;
  password: string;
  name: string;
  age: number;
  gender: string;
  nickname: string;
  isLoggedIn: boolean;
}

export interface OnboardingData {
  breadFrequency: string;
  preferredTypes: string[];
  activityRange: string;
  favoriteBrands: string[];
}

export interface AppData {
  user?: User;
  onboarding?: OnboardingData;
  signupInProgress?: Partial<User>;
}

const STORAGE_KEY = 'breadly_app_data';

// 전체 데이터 가져오기
export const getAppData = (): AppData => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch (error) {
    console.error('Failed to get app data:', error);
    return {};
  }
};

// 전체 데이터 저장하기
export const setAppData = (data: AppData): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to set app data:', error);
  }
};

// 사용자 정보 가져오기
export const getUser = (): User | null => {
  const data = getAppData();
  return data.user || null;
};

// 사용자 정보 저장하기
export const setUser = (user: User): void => {
  const data = getAppData();
  setAppData({ ...data, user });
};

// 로그인 체크
export const isLoggedIn = (): boolean => {
  const user = getUser();
  return user?.isLoggedIn || false;
};

// 로그인
export const login = (id: string, password: string): boolean => {
  const user = getUser();
  if (user && user.id === id && user.password === password) {
    setUser({ ...user, isLoggedIn: true });
    return true;
  }
  return false;
};

// 로그아웃
export const logout = (): void => {
  const user = getUser();
  if (user) {
    setUser({ ...user, isLoggedIn: false });
  }
};

// 회원가입 진행 중 데이터 저장
export const setSignupProgress = (data: Partial<User>): void => {
  const appData = getAppData();
  setAppData({ ...appData, signupInProgress: { ...appData.signupInProgress, ...data } });
};

// 회원가입 진행 중 데이터 가져오기
export const getSignupProgress = (): Partial<User> => {
  const data = getAppData();
  return data.signupInProgress || {};
};

// 회원가입 완료
export const completeSignup = (): void => {
  const data = getAppData();
  const signupData = data.signupInProgress;
  if (signupData && signupData.id && signupData.password && signupData.name && signupData.age && signupData.gender && signupData.nickname) {
    const newUser: User = {
      id: signupData.id,
      password: signupData.password,
      name: signupData.name,
      age: signupData.age,
      gender: signupData.gender,
      nickname: signupData.nickname,
      isLoggedIn: true,
    };
    setAppData({ ...data, user: newUser, signupInProgress: undefined });
  }
};

// 온보딩 데이터 저장
export const setOnboardingData = (onboarding: OnboardingData): void => {
  const data = getAppData();
  setAppData({ ...data, onboarding });
};

// 온보딩 데이터 가져오기
export const getOnboardingData = (): OnboardingData | null => {
  const data = getAppData();
  return data.onboarding || null;
};

// 온보딩 완료 여부
export const isOnboardingCompleted = (): boolean => {
  return !!getOnboardingData();
};
