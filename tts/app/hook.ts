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
  traderType: string;
  goal: string;
  platform: string;
}

const onboardingIntialState: IOnboarding = {
  step: 0,
  tradingPeriod: "",
  traderType: "",
  goal: "",
  platform: "",
};
type OnboardingState = typeof onboardingIntialState & {
  reset: () => void;
  setStep: (index: number) => void;
  setTradingPeriod: (period: string) => void;
  setTraderType: (trader: string) => void;
  setGoal: (goal: string) => void;
  setPlatform: (plat: string) => void;
};

export const onboardingStore = create<OnboardingState>()((set) => ({
  ...onboardingIntialState,
  reset: () => set(onboardingIntialState),
  setStep: (index) => set(() => ({ step: index })),
  setTradingPeriod: (period) => set(() => ({ tradingPeriod: period })),
  setTraderType: (trader) => set(() => ({ traderType: trader })),
  setGoal: (traderGoal) => set(() => ({ goal: traderGoal })),
  setPlatform: (plat) => set(() => ({ platform: plat })),
}));

const sideBarInitialState: IForgotPassword = {
  step: 1,
};

type sideBarState = typeof sideBarInitialState & {
  setPage: (pageIndex: number) => void;
};

export const sideBarStore = create<sideBarState>()((set) => ({
  ...sideBarInitialState,
  setPage: (pageIndex) => set(() => ({ step: pageIndex })),
}));

interface ITradingAccount {
  name: string;
  platform: string;
  id: string;
}

interface IArrayTradingAccount {
  accounts: Array<ITradingAccount>;
}
const tradingAccountsInitialState: IArrayTradingAccount = { accounts: [] };

type tradingAccountsState = typeof tradingAccountsInitialState & {
  setAccounts: (accounts: ITradingAccount) => void;
};

export const tradingAccountStore = create<tradingAccountsState>()((set) => ({
  ...tradingAccountsInitialState,
  setAccounts: (acc: ITradingAccount) =>
    set((state) => ({ accounts: [...state.accounts, acc] })),
}));

interface IConnectAccount {
  login: string | null | number;
  platform: string| null;
  serverName: string | null;
  password: string | null;
}


const connectAccountInitialState : IConnectAccount ={
  login: null,
  platform: null,
  serverName: null,
  password: null
}

type connectAccountState = typeof connectAccountInitialState & {
  setPlatform:(plat: string)=> void;
}

export const connectAccountStore = create <connectAccountState>()((set)=> ({
  ...connectAccountInitialState,
  setPlatform: (plat:string)=> set((state)=> ({platform: plat}))
}))