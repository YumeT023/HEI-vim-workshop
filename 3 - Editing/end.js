/**
  * TODO:
  * 1 Write 'random' fn body:
  *   ````
  *     return Math.random() * (1000 - 1) + 1
  *   ````
  * 2 Delete the 'unstable' and 'random' function
  * 3 Write the following instead:
     function stable() {
       console.log("SUCCDSS!!")
     }
  * 4 Delete call to 'unstable'
  * 5 Call 'stable' instead!
  *
  * 6 Put semicolon (;) on every lines!
  * 7 The code is almost unreadable, pls add indentations
  * 8 correct "SUCCDSS!!" -> "SUCCESS!!"
  *
  * 9 ... ohh, You shouldn't have done what I said...
  * > our boss want the old code 
  * > undo everythingggg
  *
  * 10 ... suddenly, he finds that the new one is better
  * > Can you get them back ???
  */

function random() {}

function unstable() {
  if (random() > 320) {
    console.log("ERROR!! unsupported operation.")
    return
  }
  console.log("SUCCESS!!")
}

unstable()
