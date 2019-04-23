function WriteToFile() {
 
    set fso = CreateObject("Scripting.FileSystemObject"); 
    set s   = fso.CreateTextFile("Users/⁨sarthaktaneja/Documents⁩/Health_Record.txt", True);
 
    var firstName = document.getElementById('firstname');
    var lastName  = document.getElementById('lastname');
    var bloodPressure  = document.getElementById('bp');
    var height  = document.getElementById('height');
    var weight  = document.getElementById('weight');
    var file  = document.getElementById('filehash');
 
    s.writeline("First Name :" + FirstName);
    s.writeline("Last Name :" + lastName);
    s.writeline("Blood Pressure :" + bloodPressure);
    s.writeline("Height :" + height);
    s.writeline("Weight :" + weight);
    s.writeline("File Hash :" + file);
 
    s.writeline("-----------------------------");
    s.Close();
 }