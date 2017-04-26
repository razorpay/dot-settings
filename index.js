module.exports = {
  evaluate:    /`([\s\S]+?(\}?)+)`/g,
  interpolate: /`=([\s\S]+?)`/g,
  encode:      /`!([\s\S]+?)`/g,
  use:         /`#([\s\S]+?)`/g,
  useParams:   /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
  define:      /`##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#`/g,
  defineParams:/^\s*([\w$]+):([\s\S]+)/,
  conditional: /`\?(\?)?\s*([\s\S]*?)\s*`/g,
  iterate:     /`~\s*(?:`|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*`)/g,
  varname:  "_",
  strip:    true,
  append:   true,
  selfcontained: false,
  doNotSkipEncoded: false
}
