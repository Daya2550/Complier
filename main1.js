     var [iframe,main,dubbing ] = [document.createElement("iframe"),document.createElement("main"),document.createElement("div")];      iframe.setAttribute('style','display:block;');main.classList = 'output same'; dubbing.classList = "ss"; main.append(iframe,dubbing); ss('.Input').after(main);
 function flow_load (theme) { var editor = ace.edit("editor");editor.setTheme(theme); editor.session.setMode("ace/mode/html");}    
 var editor = ace.edit("editor");editor.setTheme("ace/theme/chrome");editor.session.setMode("ace/mode/html"); var koli = editor;    
     //koli.getTheme() setOptions  ace koli.setOptions({cursorStyle:"smooth",behavioursEnabled:true,highlightGutterLine:true,animatedScroll:true, fontSize: "16px",foldStyle:"markbegin",showPrintMargin:0,enableLiveAutocompletion:true,enableBasicAutocompletion:true,}); 
   //sort Keys 
    koli.commands.addCommand({ name: "input_full",bindKey: {win: 'Ctrl-i',  mac: 'Command-i'}, exec: function(editor) {
       var action = ss('.output'),ed = ss('#editor');if(action.style.display == 'none'){action.style.display  = 'block'; if(action.style.width.length > 0){ ed.style.right = action.style.width } else { ed.style.right  = "20%";}flow_load (koli.getTheme())  }else { action.style.display  = 'none';  ed.style.right  = "0"; flow_load (koli.getTheme())}},
      readOnly: true // false if this command should not apply in readOnly mode
     });  
      // end sort key      
    //output
  koli.setValue(`<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8">\n<meta id="viewport" name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=2, viewport-fit=cover" />\n<title>white space</title></head>
<body>\n\n\n\n</body>\n</html>\n<style>\n\n\n</style>\n<!-- <script>\n\n</script>-->`);   // start value
    
    var sesssin =  window.sessionStorage.getItem('backup');  // current  bar session
         if(sesssin == null){
          iframe.srcdoc = koli.getValue();
         }else {
           koli.setValue(sesssin);
           iframe.srcdoc = sesssin;
         }
       
        koli.clearSelection() ;
        koli.on('change',function(){ 
          window.sessionStorage.setItem('backup',koli.getValue());
           iframe.srcdoc = koli.getValue();
       });  
    interact('.output').resizable({
    // resize from all edges and corners
    
    edges: { left: true, right: false, bottom: false, top: false },
    onstart: function (event) {ss('.ss').style.display = 'block'},
     onend  : function (event) {ss('.ss').style.display = 'none'},
    listeners: { 
      move (event) { 
        var target = event.target
        var x = (parseFloat(target.getAttribute('data-x')) || 0)
        var y = (parseFloat(target.getAttribute('data-y')) || 0)
             
        // update the element's style 
          ss('#editor').style.right = event.rect.width+"px"; 
           
        target.style.width = event.rect.width+"px"; //event.rect.width + 'px' 
           flow_load (koli.getTheme());
    
             
        
        x += event.deltaRect.left; 
       // y += event.deltaRect.top

        target.style.transform = 'translate(' + x + 'px,' + y + 'px)'

        target.setAttribute('data-x', x) 
        target.setAttribute('data-y', y)
       
      }
    },
    modifiers: [
      // keep the edges inside the parent
      interact.modifiers.restrictEdges({
        outer: 'parent'
      }),

      // minimum size 
      interact.modifiers.restrictSize({   
       min:{width:30},
       max:{width:1300}
      })
    ],
  
    inertia: true
  });
     
  



function ss(a){return document.querySelector(a)}
function all(x){return document.querySelectorAll(x)}    

// Simple frame 
 function openCustomFrame(frameId) {
    document.getElementById(frameId).style.display = 'block';
  }

  function closeCustomFrame(frameId) {
    document.getElementById(frameId).style.display = 'none';
  }

  function resizeCustomFrame(frameId, height) {
    document.getElementById(frameId).style.height = height + 'px';
    
    
  } 

// Not pad 
        let currentPage = 1;
        const notepad = document.getElementById("notepad");
        notepad.value = getNoteForPage(currentPage);

        function saveNote() {
            const note = notepad.value;
            localStorage.setItem(`notePage${currentPage}`, note);
        }

        function deleteNote() {
            notepad.value = "";
            localStorage.removeItem(`notePage${currentPage}`);
        }

        function downloadNote() {
            const note = notepad.value;
            const blob = new Blob([note], { type: "text/plain" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `notePage${currentPage}.txt`;
            a.click();
            URL.revokeObjectURL(url);
        }

        function setBold() {
            notepad.style.fontWeight = "bold";
        }

        function changeFontSize(fontSize) {
            notepad.style.fontSize = fontSize + "px";
        }

        function changeTextColor(color) {
            notepad.style.color = color;
        }

        function previousPage() {
            if (currentPage > 1) {
                saveNote();
                currentPage--;
                updatePageIndicator();
                notepad.classList.add("page-transition");
                notepad.value = getNoteForPage(currentPage);
                setTimeout(() => notepad.classList.remove("page-transition"), 10);
            }
        }

        function nextPage() {
            saveNote();
            currentPage++;
            updatePageIndicator();
            notepad.classList.add("page-transition");
            notepad.value = getNoteForPage(currentPage);
            setTimeout(() => notepad.classList.remove("page-transition"), 10);
        }

        function updatePageIndicator() {
            document.getElementById("pageIndicator").textContent = `Page ${currentPage}`;
        }

        function getNoteForPage(page) {
            return localStorage.getItem(`notePage${page}`) || "";
        }

 

 // Html to file 
        document.getElementById("downloadButton").addEventListener("click", function () {
            const htmlCode = document.getElementById("htmlCode").value;
            const fileName = document.getElementById("fileName").value + ".html";
            const blob = new Blob([htmlCode], { type: "text/html" });
            const url = URL.createObjectURL(blob);

            const a = document.createElement("a");
            a.href = url;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });


// code block
function copyCode() {
        const codeBlock = document.getElementById('codeBlock');
        const textArea = document.createElement('textarea');
        textArea.value = codeBlock.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Code copied to clipboard!');
    }
  

  function openW3EditorFrame() {
    document.getElementById('customFrame3').style.display = 'block';
  }

  function resizeCustomFrame(id, value) {
    document.getElementById(id).style.height = value + "px";
  }

  function closeCustomFrame(id) {
    document.getElementById(id).style.display = "none";
    document.getElementById('w3EditorFrame').src = ""; // Clear frame on close
  }

  function showW3Editor() {
    const frame = document.getElementById('customFrame3');
    const iframe = document.getElementById('w3EditorFrame');
    frame.style.display = 'block'; // Show the container
    iframe.src = "w3style-editor.html"; // Load the editor inside
  }

  function resizeCustomFrame(id, value) {
  document.getElementById(id).style.height = value + 'px';
}

function closeCustomFrame(id) {
  document.getElementById(id).style.display = 'none';
}
