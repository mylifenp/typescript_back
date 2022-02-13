export const batchUsers = async (keys: any, { User }: any) => {
  const users = await User.find({ _id: { $in: keys } });
  return keys.map((key: any) => users.find((user: any) => user.id === key));
};
