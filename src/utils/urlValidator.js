import isUrl from "is-url";

const urlValidator = (url) => {
  // add https:// to links that arent specified
  if (!startsWithHttpOrHttps(url)) {
    url = "https://" + url;
  }
  if (isUrl(url)) return url;
  else return false;
};

const startsWithHttpOrHttps = (str) => {
  return /^(https:\/\/|http:\/\/)/.test(str);
};

export default urlValidator;
