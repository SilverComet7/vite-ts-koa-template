import {
  BadRequestError,
  Body,
  BodyParam,
  QueryParam,
  Delete,
  Get,
  JsonController,
  NotFoundError,
  Param,
  Post,
  Put,
} from "routing-controllers";
import { getModel } from "../models";
import { AdminModel } from "../models/AdminModel";
// import { getPlainDocByJsonTransform } from '../../models/getDoc';

@JsonController("/admins")
export class AdminManger {
  private adminModel = getModel(AdminModel);
  @Get()
  protected async getAdmin(@QueryParam("walletAddress") walletAddress: string) {
    const adminDocument = await this.adminModel
      .findOne({ walletAddress })
      .lean()
      .exec();
    return {
      code: 0,
      data: adminDocument ? adminDocument : false,
    };
  }
  @Post()
  protected async createdAdmin(@Body() body: AdminModel) {
    const { walletAddress, twitterAddress } = body;
    const adminDocument = await this.adminModel
      .findOne({ $or: [{ walletAddress },{twitterAddress}] })
      .lean()
      .exec();
    if (adminDocument)
      throw new BadRequestError(
        `walletAddress |  twitterAccount already exists: ${walletAddress} | ${twitterAddress}`
      );
    const [insertRst] = await this.adminModel.insertMany(body);
    return {
      data: insertRst.toObject(),
    };
  }
}
