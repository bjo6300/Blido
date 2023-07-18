export type CommentType = {
    commentId?: number;
    presentationId: number;
    writer: string;
    content: string;
    isChecked: boolean;
    createdDate?: string;
  };