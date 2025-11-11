import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import type { AppDispatch, RootState } from "./ui-managment/store";


// export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// export const useAppSelector = useSelector.withTypes<RootState>

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;