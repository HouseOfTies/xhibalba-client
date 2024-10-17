import { Start, Update, Sender, Command, On } from 'nestjs-telegraf';
import { UpdateType } from 'src/common/decorators/update-type.decorator';
import { Context } from 'telegraf';
import { UpdateType as TelegrafUpdateType } from 'telegraf/typings/telegram-types';

@Update()
export class GreeterUpdate {
  constructor() {}

  @Start()
  onStart(): string {
    return 'Say hello to me';
  }

  @Command(['hi', 'hello', 'hey', 'qq'])
  onGreetings(
    @UpdateType() updateType: TelegrafUpdateType,
    @Sender('first_name') firstName: string,
  ): string {
    return `Hey ${firstName}`;
  }

  @On('sticker')
  async onSticker(ctx: Context) {
    await ctx.reply('👍');
  }
}
