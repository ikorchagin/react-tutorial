export const selectUsers = (state) => state.usersPage.users;

export const selectTotalCount = (state) => state.usersPage.totalCount;

export const selectPageSize = (state) => state.usersPage.pageSize;

export const selectCurrentPage = (state) => state.usersPage.currentPage;

export const selectIsFetching = (state) => state.usersPage.isFetching;

export const selectIsFolowing = (state) => state.usersPage.isFolowing;
