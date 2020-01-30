const fs = require("fs");
const parser = require("@babel/parser"); //利用@babel/parser分析代码

const moduleAnalyser = filename => {
  const content = fs.readFileSync(filename, "utf-8");

  const ast = parser.parse(content, { sourceType: "module" });
  // console.log(ast);
  console.log(ast.program.body);
  
  // console.log(content);
};

moduleAnalyser("./src/index.js");
