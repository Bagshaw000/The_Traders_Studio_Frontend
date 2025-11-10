import { create } from "zustand";

interface IAuthSetup {
  step: number;
  signUpInfo: {
    email: string;
    password: string;
    username: string;
  };
}
interface IForgotPassword {
  step: number;
}

const authInitialState: IAuthSetup = {
  step: 0,
  signUpInfo: { email: "", password: "", username: "" },
};

type AuthState = typeof authInitialState & {
  reset: () => void;
  increase: (by: number) => void;
  setStep: (index: number) => void;
};

export const authSetupStore = create<AuthState>()((set) => ({
  ...authInitialState,
  reset: () => set(authInitialState),
  increase: (by) => set((s) => ({ step: s.step + by })),
  setStep: (index) => set(() => ({ step: index })),
}));

// Forgot password state
const forgotPasswordIntialState: IForgotPassword = {
  step: 0,
};
type ForgotPasswordState = typeof forgotPasswordIntialState & {
  reset: () => void;
  setStep: (index: number) => void;
};

export const forgotPasswordStore = create<ForgotPasswordState>()((set) => ({
  ...forgotPasswordIntialState,
  reset: () => set(forgotPasswordIntialState),
  setStep: (index) => set(() => ({ step: index })),
}));

//Onboarding state
interface IOnboarding {
  step: number;
  tradingPeriod: string;
  traderType:string;
  goal:string
}

enum TraderType {
  day="day",
  swing="swing",
  position="position",
  algo="algo"
}

const onboardingIntialState: IOnboarding = {
  step: 0,
  tradingPeriod: "",
  traderType: "",
  goal:""
};
type OnboardingState = typeof onboardingIntialState & {
  reset: () => void;
  setStep: (index: number) => void;
  setTradingPeriod:(period:string)=> void;
  setTraderType:(trader: string)=> void;
  setGoal:(goal:string)=> void
};

export const onboardingStore = create<OnboardingState>()((set) => ({
  ...onboardingIntialState,
  reset: () => set(onboardingIntialState),
  setStep: (index) => set(() => ({ step: index })),
  setTradingPeriod: (period) => set(()=> ({tradingPeriod:period})),
  setTraderType:(trader) => set(()=>({traderType:trader})),
  setGoal:(traderGoal)=>set(()=>({goal:traderGoal}))
}));