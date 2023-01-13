import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '~/app/Store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
