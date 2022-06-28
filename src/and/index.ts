import { combine, Store } from 'effector';

export function and(...stores: Array<Store<any>>): Store<boolean> {
  return combine(stores, (values) =>
    values.reduce((all, current) => Boolean(all) && Boolean(current)),
  ) as Store<boolean>;
}
