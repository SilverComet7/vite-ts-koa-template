import { IsString } from 'class-validator';
import { JsonController, Post, Body } from 'routing-controllers';
import { AdminModel, getModel } from '../models';
import { JwtManger } from '../toolkit/jwt';

class LoginForm {
  @IsString()
  account: string;

  @IsString()
  password: string;
}

@JsonController()
export class LoginController {
  @Post('/login_check')
  protected async login(@Body() body: LoginForm) {
    const adminInfo = await getModel(AdminModel).findOne({ account: body.account }).lean().exec();
    if (!adminInfo) return 'not find this account';
    if (adminInfo.password !== body.password) return '密码错误';
    const token = JwtManger.Instance().getJwtSign(adminInfo);

    return {
      code: 0,
      data: { ...adminInfo, token },
    };
  }
}
