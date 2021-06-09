function formatPoem(poem) {
   return poem.replace(/\. /g, ".\n");
}


function formatPoem(poem) {
   return poem.split(". ").join(".\n");
}


function formatPoem(poem) {
   const newPoem = poem.split(". ")
   let text = ""
   for (let i = 0; i < newPoem.length; i++) {
      if (i === newPoem.length - 1) {
         text += newPoem[i] + ""
      } else {
         text += newPoem[i] + ".\n"
      }
   }
   return text
}


console.log(formatPoem('Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex. Complex is better than complicated.'));