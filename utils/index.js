import { parseISO, compareAsc } from "date-fns";

export const cx = (...classNames) => classNames.filter(Boolean).join(" ");

export const sortBlogs = (blogs) => {
  return blogs.sort((a, b) => {
    compareAsc(parseISO(a.publishedAt), parseISO(b.publishedAt));
  }).reverse();
};
