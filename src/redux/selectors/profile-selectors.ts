import {AppStateType} from "../redux-store";
import {UserProfileType} from "../profile-reducer";

export const getProfile = (state: AppStateType): UserProfileType => {
    return state.profile.profile
}

export const getStatus = (state: AppStateType): string => {
    return state.profile.status
}

export const getIsProfileLoading = (state: AppStateType): boolean => {
    return state.profile.isProfileLoading
}