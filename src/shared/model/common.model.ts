export type MatColors = 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
export type MatVariants = 'text' | 'outlined' | 'contained';
export type MatInputVariants = 'filled' | 'outlined' | 'standard';
export interface ArticleData {
    title: string;
    body: string;
    id: number;
    comment_count: number;
    like_count: number;
    liked_by_current_user: boolean;
    owner: UserModel;
    following: boolean;
    created_at: Date;
}

export interface UserModel {
    id: number;
    name: string
}
