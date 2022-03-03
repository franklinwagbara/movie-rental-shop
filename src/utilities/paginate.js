import _ from "lodash";

const paginate = (items, pageSize, pageNumber) => {
  const startindex = (pageNumber - 1) * pageSize;
  return _(items).slice(startindex).take(pageSize).value();
};

export default paginate;
