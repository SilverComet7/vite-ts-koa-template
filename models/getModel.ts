import { getModelForClass } from '@typegoose/typegoose';
import { AnyParamConstructor } from '@typegoose/typegoose/lib/types';

export function getModel<U extends AnyParamConstructor<unknown>>(cls: U) {
  const customModel = getModelForClass(cls, {
    schemaOptions: {
      timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
      },
      toJSON: {
        virtuals: true,
        getters: true,
        versionKey: false,
      },
      versionKey: false,
    },
  });

  return customModel;
}
