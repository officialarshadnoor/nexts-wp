import page from "./page";
import single from "./single";
import category from "./category";
import tag from "./tag";
import main from "./main";
import archive from "./archive";
import SingleLpu from "./single-lpu";

export default {
  // front page will a specifycally page
  page,
  single,
  lpu:SingleLpu,
  category,
  tag,
  index: main,
  archive,
};
