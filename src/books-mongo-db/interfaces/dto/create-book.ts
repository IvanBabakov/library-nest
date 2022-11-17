/* eslint-disable prettier/prettier */
export interface CreateBookDto {
  _id: string;
  title: string;
  description: string;
  authors: string;
  favorite: boolean;
  fileCover: string;
  fileName: string;
  fileBook: string;
}
