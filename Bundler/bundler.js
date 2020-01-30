const fs = require("fs");
const path = require("path");
const parser = require("@babel/parser"); //利用@babel/parser分析代码
const traverse = require('@babel/traverse').default;
const babel = require("@babel/core");

// const moduleAnalyser = filename => {
//   const content = fs.readFileSync(filename, "utf-8");

//   const ast = parser.parse(content, { sourceType: "module" });
//   const dependencies = {}; //存的路径不能为相对路径

//   traverse(ast, {
// 		ImportDeclaration({ node }) {
// 			const dirname = path.dirname(filename);//获取文件的绝对路径
// 			const newFile = './' + path.join(dirname, node.source.value);
// 			dependencies[node.source.value] = newFile;//dependencies的键为相对路径，键值为绝对路径
// 		}
//   });
  
//   console.log(dependencies);
//   const { code } = babel.transformFromAst(ast, null, {
//     presets: ["@babel/preset-env"] //将代码转换成浏览器可以运行的代码
//   });
//   console.log(code);
//   return {
//     filename,
//     dependencies,
//     code
//   };
// };

const moduleAnalyser = (filename) => {
	const content = fs.readFileSync(filename, 'utf-8');
	const ast = parser.parse(content, {
		sourceType: 'module'
	});
	const dependencies = {};
	traverse(ast, {
		ImportDeclaration({ node }) {
			const dirname = path.dirname(filename);
			const newFile = './' + path.join(dirname, node.source.value);
			dependencies[node.source.value] = newFile;
		}
	});
	const { code } = babel.transformFromAst(ast, null, {
		presets: ["@babel/preset-env"]
	});
	return {
		filename,
		dependencies,
		code
	}
}

// 遍历
// const makeDependenciesGraph = entry => {
//   //entry项目入口文件
//   const entryModule = moduleAnalyser(entry);
//   const graphArray = [entryModule];
//   for (let i = 0; i > graphArray.length; i++) {
//     const item = graphArray[i];
//     const { dependencies } = item;
//     if (dependencies) {
//       for (let j in dependencies) {
//         graphArray.push(moduleAnalyser(dependencies[j]));
//       }
//     }
//   }
//   console.log(graphArray);
// };

const makeDependenciesGraph = (entry) => {
	const entryModule = moduleAnalyser(entry);
	const graphArray = [ entryModule ];
	for(let i = 0; i < graphArray.length; i++) {
		const item = graphArray[i];
		const { dependencies } = item;
		if(dependencies) {
			for(let j in dependencies) {
				graphArray.push(
					moduleAnalyser(dependencies[j])
				);
			}
		}
  }
  console.log(graphArray);
  
	// const graph = {};
	// graphArray.forEach(item => {
	// 	graph[item.filename] = {
	// 		dependencies: item.dependencies,
	// 		code: item.code
	// 	}
	// });
	// return graph;
}

const graphInfo = makeDependenciesGraph("./src/index.js");
// console.log(graphInfo);
