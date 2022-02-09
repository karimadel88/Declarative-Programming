# Declarative-Programming
Functional Programming with javaScript
* src : https://www.youtube.com/playlist?list=PLpbZuj8hP-I6F-Zj1Ay8nQ1rMnmFnlK2f

### JS ways equivalents to C# LINQ methods
1. Map == Select

```js
let myData = [1,5,9,7,9]
let addOne = (x) => x+1; 
MyData = MyData.map(addOne); // myData.Select(addOne)
```
2. filter == Where

```js
let myData = [1,5,9,7,9]
MyData = MyData.filter((x) => x>5); // myData.Where(x => x>5)
```
3. sort == OrderBy

```js
let myData = [1,5,9,7,9]
MyData = MyData.sort((x,y) => x-y); // myData.OrderBy(x => x)
```
4. splice(0,2) == Take(2)

```js
let myData = [1,5,9,7,9]
MyData = MyData.splice(0,2); // myData.Take(2)
```

