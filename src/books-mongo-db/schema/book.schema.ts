/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Document, Schema as MongooseSchema } from 'mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Book {
  // @Prop({_id: MongooseSchema.Types.ObjectId})
  
  @Prop({ required: true})
  public title: string;

  @Prop({ required: true})
  public authors: string;

  @Prop({default: 'About any situation'})
  public decription: string;

  @Prop({default: false})
  public favoite: boolean;
  
  @Prop({default: ''})
  public fileCover: string;

  @Prop({default: ''})
  public fileName: string;
  
  @Prop({default: ''})
  public fileBook: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
