import { ModelOptions, prop } from "@typegoose/typegoose";
import { BaseModel } from "./base.model";
import {
  validate,
  validateOrReject,
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
} from "class-validator";
@ModelOptions({ schemaOptions: { collection: "Admin" } })
export class AdminModel extends BaseModel {
  @prop()
  // @Length(16)
  
  public walletAddress: string;

  @prop()
  // @IsEmail()
  
  public twitterAddress: string;

  @prop()
  // @Length(16)
  public recommendPersonAddress: string;
}
