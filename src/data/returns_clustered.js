const returns_clustered = [
    [2,1,0,0,0,1,0,0,0,1,0,4,0,0,0,2,1,0,1,1,2,0,0,0,3,0,1,2,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,2,4,0,0,0,1,11,0,1,2,0,0,0,0,0,0,0,0,4,0,1,9,0],
[0,43,19,0,2,15,3,19,2,1,28,56,34,46,1,19,3,37,9,15,53,8,5,20,61,0,21,8,3,7,7,1,34,3,28,0,0,19,15,11,6,26,31,35,21,14,39,23,7,1,13,0,56,3,98,7,49,68,6,3,11,0,21,51,17,46,6,0,9,2,0,0,76,1,18,10,6,27,8],
[0,15,62,0,24,6,0,15,18,2,69,27,23,64,0,7,7,28,1,110,34,0,24,25,16,13,13,2,1,1,7,0,13,31,35,0,0,0,4,109,1,8,120,19,11,27,22,8,5,22,4,21,99,7,25,38,13,8,9,9,1,0,6,44,27,18,20,5,66,0,1,1,30,5,0,5,13,6,51],
[2,1,0,9,0,0,2,0,0,2,0,13,0,0,5,0,2,0,12,1,12,0,0,2,5,0,14,12,30,1,1,0,0,0,0,9,0,1,11,3,15,1,1,13,5,0,0,0,9,0,6,0,2,1,1,0,19,6,0,0,3,7,2,0,1,4,0,0,0,10,4,9,3,0,1,0,0,6,0],
[0,2,25,3,1,1,0,4,27,2,3,14,3,2,0,1,0,49,0,15,23,0,11,7,5,4,4,4,0,0,16,0,3,8,3,1,0,0,0,17,0,6,7,6,24,2,5,1,0,6,1,3,16,0,18,10,17,13,13,10,1,0,2,12,7,13,3,1,0,0,0,1,10,6,0,5,10,2,10],
[0,16,5,0,2,9,1,5,0,0,13,35,18,11,0,1,2,1,6,1,38,1,5,58,21,0,5,2,2,2,1,0,11,6,24,1,0,3,9,0,1,48,4,33,9,20,12,10,2,0,11,16,6,3,4,1,19,14,3,2,11,0,8,5,2,17,2,1,4,3,0,0,16,0,3,11,0,8,1],
[0,1,0,1,0,4,1,0,0,0,1,19,1,2,3,0,0,1,14,0,20,0,0,0,5,0,13,39,42,1,0,0,2,1,1,0,4,2,21,2,15,0,0,22,3,1,0,0,13,0,5,1,1,3,0,0,13,9,0,0,9,0,3,0,1,2,1,0,1,17,3,4,1,1,0,1,0,7,0],
[0,27,17,0,5,6,4,21,10,4,10,73,10,2,0,0,1,24,3,19,44,0,5,35,19,3,10,3,2,0,9,1,11,2,51,5,0,3,2,16,2,30,22,50,55,14,25,5,0,14,2,1,36,6,41,15,51,34,5,28,2,0,30,41,24,47,28,0,4,0,5,0,65,4,2,10,3,9,5],
[0,3,21,0,40,0,0,8,2,0,12,6,2,6,2,0,0,3,0,7,32,0,50,3,2,2,1,1,0,0,2,0,3,1,2,0,0,0,1,29,1,1,36,0,7,1,20,0,1,1,1,8,7,0,11,8,12,1,5,6,6,0,3,15,3,17,35,0,7,0,0,0,35,9,0,7,0,1,9],
[4,1,0,1,0,2,1,4,0,1,0,7,1,0,0,10,26,4,6,3,25,0,0,0,4,0,6,1,4,0,0,2,4,1,3,2,0,0,3,0,3,2,1,10,4,2,4,0,0,0,6,0,2,16,2,1,9,5,0,0,2,2,21,0,2,2,0,0,0,3,0,0,1,1,3,0,1,39,0],
[0,29,70,1,5,12,0,10,24,1,56,73,37,25,0,3,1,22,13,60,77,0,6,18,41,3,13,8,2,1,2,1,13,31,84,1,0,37,12,9,4,49,81,31,23,15,26,3,5,11,14,25,13,3,44,24,66,30,2,11,2,1,8,12,11,47,5,3,26,0,0,0,18,1,0,12,16,9,22],
[1,47,25,2,6,40,20,63,7,14,95,107,51,32,8,21,16,57,34,49,176,8,10,70,58,7,64,22,32,2,20,13,42,13,68,5,4,24,93,56,30,54,39,153,80,46,84,39,20,5,41,15,53,17,50,33,108,88,10,12,49,1,30,39,44,90,15,0,26,10,3,11,143,9,13,29,11,59,9],
[0,38,24,0,0,13,1,11,0,4,64,57,25,7,0,6,3,8,23,5,24,0,1,21,48,0,4,0,0,0,7,1,16,10,12,0,0,12,5,12,5,43,10,8,3,13,23,6,3,10,1,4,7,5,10,5,16,44,8,2,1,0,15,6,6,39,4,9,14,1,0,1,14,2,1,7,0,4,7],
[0,26,87,0,0,14,1,4,8,0,33,37,9,54,0,2,0,10,1,28,7,0,1,17,31,6,6,0,0,2,5,0,7,51,39,0,0,0,3,8,1,25,23,11,8,14,5,0,0,60,0,13,4,0,9,38,36,12,6,3,4,0,7,3,6,4,8,8,11,1,0,0,11,2,1,3,6,2,20],
[0,3,0,5,0,1,2,0,1,0,1,7,1,0,0,1,0,8,17,2,4,0,0,3,1,0,10,7,16,0,7,0,0,0,3,7,1,2,39,0,14,0,0,6,5,1,0,1,17,0,22,0,3,0,0,0,4,5,0,0,9,0,5,5,7,0,0,0,1,8,0,1,3,0,1,3,0,4,0],
[4,21,8,2,2,9,0,5,3,14,5,43,4,3,2,21,22,5,4,1,52,11,1,1,12,0,41,1,3,1,0,8,2,1,8,1,0,8,4,10,4,11,5,175,5,9,4,1,3,4,24,2,2,23,5,0,28,10,2,3,3,1,40,1,5,9,0,0,1,0,0,0,4,3,14,0,1,113,2],
[1,2,7,0,0,8,0,7,1,25,4,14,0,3,0,18,13,0,11,1,24,0,1,1,5,0,10,0,3,1,2,7,3,1,3,0,0,2,1,1,0,4,5,45,1,9,2,10,1,0,1,0,0,6,1,1,14,6,2,0,2,0,16,5,1,5,1,0,0,0,0,0,3,0,2,1,2,32,2],
[0,27,39,1,56,1,1,24,8,21,25,46,7,17,8,4,1,25,11,36,109,0,16,26,16,0,11,5,10,0,38,1,20,5,21,5,0,20,8,120,1,16,63,40,73,6,23,5,1,1,7,2,62,1,67,41,50,14,21,11,6,0,20,50,57,54,29,0,55,3,0,1,57,4,1,14,2,19,6],
[1,10,3,16,1,12,24,6,1,6,9,31,21,0,14,4,8,8,133,2,35,0,0,1,19,1,98,59,74,1,0,1,5,1,4,6,3,167,77,6,53,12,2,44,4,11,9,3,29,0,73,0,7,6,1,2,23,14,1,0,30,1,30,3,5,11,1,0,1,4,4,7,24,0,2,4,0,65,0],
[3,19,94,0,18,3,1,21,5,0,59,34,9,25,1,2,7,36,3,47,27,0,25,23,24,23,20,0,0,0,9,0,6,20,41,0,0,4,6,70,1,22,53,30,24,17,42,0,0,17,5,20,31,6,46,52,30,44,18,13,5,0,7,19,41,20,25,10,16,3,0,1,40,4,0,12,38,7,37],
[1,48,32,6,21,25,15,47,21,8,71,117,38,3,6,68,6,160,32,40,157,4,2,33,76,1,20,7,14,0,18,11,83,10,78,0,8,5,64,63,18,41,80,121,66,59,43,10,29,0,12,24,75,10,76,53,58,54,4,44,26,2,89,41,50,57,26,3,22,0,1,48,124,15,40,39,5,27,12],
[2,9,1,0,0,2,0,0,0,1,0,9,0,0,1,9,1,0,0,0,0,7,0,0,8,0,3,0,2,3,0,0,2,0,2,0,0,1,0,0,0,6,0,11,0,1,0,1,0,0,5,0,0,1,0,0,0,4,0,2,0,0,3,1,1,1,0,0,0,0,0,0,0,0,10,0,0,12,0],
[0,10,20,0,12,1,0,7,30,1,9,10,1,1,0,1,1,10,0,24,12,0,49,7,5,3,5,0,1,0,17,1,5,1,3,0,0,0,0,51,0,9,10,7,18,6,7,0,1,2,13,4,9,3,29,46,4,6,39,21,0,0,7,24,8,9,36,0,3,1,1,0,22,16,0,5,7,10,9],
[0,26,24,0,9,36,1,20,1,8,15,92,20,16,0,2,3,19,3,28,46,0,5,33,36,6,24,0,23,0,12,1,13,12,29,2,0,11,2,15,5,41,54,18,28,25,21,6,8,13,20,6,24,2,8,12,75,56,1,5,3,0,21,21,12,57,5,1,10,1,12,0,37,1,0,2,2,15,18],
[2,52,9,2,3,17,3,22,2,1,58,62,43,25,2,8,5,18,17,18,82,9,5,39,39,0,27,4,10,1,2,1,33,17,63,1,1,10,25,12,4,37,30,130,21,25,31,11,5,0,5,7,13,12,21,6,70,57,2,10,22,1,28,6,8,47,5,3,7,1,13,0,94,2,8,15,2,15,4],
[0,7,12,0,2,0,0,2,0,2,1,12,0,14,0,0,0,1,1,11,2,0,0,4,1,0,7,0,0,0,1,0,1,5,3,0,0,6,0,4,0,1,5,4,2,2,0,0,3,35,1,1,3,0,3,10,1,2,2,19,0,0,4,5,14,8,3,2,2,0,0,0,3,3,0,1,1,0,6],
[2,14,9,23,9,8,7,14,2,9,17,50,9,2,10,65,12,15,76,13,24,1,18,12,20,2,2,22,22,1,14,5,11,1,24,5,3,28,49,10,29,16,17,71,16,22,16,6,23,1,28,0,9,6,3,5,19,38,5,7,50,0,24,23,24,22,4,3,14,21,10,8,34,2,11,9,1,50,2],
[0,3,2,19,2,0,35,3,0,0,2,11,1,1,11,6,1,3,61,3,7,0,2,1,4,1,5,9,37,0,1,0,3,0,5,18,7,5,38,4,43,5,5,12,7,3,3,0,23,0,3,1,3,0,0,3,22,13,1,3,20,1,10,0,3,4,0,0,0,16,21,18,12,2,0,0,1,11,0],
[0,5,0,13,0,3,47,3,0,2,3,41,0,0,10,2,1,12,66,3,22,1,4,7,6,0,19,29,58,0,0,0,1,0,4,12,6,27,66,0,47,8,3,54,10,10,3,1,58,0,15,0,17,1,15,2,10,18,0,1,36,0,21,1,5,12,0,0,5,14,30,13,14,0,0,0,0,10,0],
[3,1,0,0,0,1,0,0,0,2,1,3,0,0,0,2,3,0,0,0,2,2,0,0,0,0,1,0,0,1,0,2,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,2,2,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,2,0],
[0,5,4,0,15,2,1,8,7,0,3,19,7,4,3,0,6,32,3,2,19,0,12,5,10,0,22,1,1,0,25,0,6,15,16,0,0,17,3,20,0,8,12,8,16,2,2,0,1,0,1,2,17,16,26,3,22,9,2,11,4,0,5,8,11,15,9,0,2,4,0,0,9,14,0,10,1,9,3],
[1,6,1,1,0,1,0,3,0,2,4,15,0,0,1,8,5,2,2,0,13,3,0,2,5,0,6,0,0,1,0,0,1,0,5,0,0,2,2,0,3,2,0,8,0,0,1,1,0,0,5,0,0,4,0,0,7,3,0,1,2,0,11,0,0,0,0,0,0,0,0,0,2,0,5,0,0,17,1],
[3,35,4,0,4,20,1,16,1,1,29,48,11,8,0,0,1,10,0,6,88,2,4,10,32,0,21,3,2,1,0,0,12,11,22,0,0,8,5,28,2,25,25,10,8,40,57,7,2,0,7,10,5,5,13,8,14,29,107,4,8,0,20,3,2,59,4,5,8,0,0,1,23,1,2,6,0,17,2],
[0,4,36,0,6,3,0,5,6,0,23,19,4,47,0,0,2,3,0,22,15,1,4,7,13,12,5,2,1,0,10,0,3,10,15,0,0,0,3,39,0,11,16,6,6,8,7,1,1,68,2,15,2,0,7,10,7,14,0,6,3,0,3,2,9,31,4,6,9,2,1,0,7,2,0,3,2,3,9],
[0,23,26,0,1,10,0,43,55,3,65,90,12,33,0,11,2,32,1,31,65,0,3,22,51,4,15,5,1,1,28,3,20,23,29,0,0,6,11,17,2,50,57,48,13,13,27,8,3,4,13,30,21,4,16,10,41,38,11,6,1,0,15,23,19,54,2,3,21,2,2,1,47,2,0,12,5,6,15],
[0,0,0,7,0,0,1,5,0,3,0,3,0,0,13,0,1,1,8,0,2,1,0,1,1,1,15,8,8,0,0,0,0,0,1,5,0,0,9,0,8,0,1,10,3,0,1,0,4,0,10,1,0,1,0,0,6,5,0,0,23,0,2,0,0,0,0,0,0,8,12,0,1,0,0,2,0,4,0],
[0,3,0,1,0,0,3,0,0,0,0,3,0,0,0,1,0,1,3,0,3,0,0,2,1,0,9,1,8,0,0,0,0,0,0,0,0,0,3,0,5,0,0,4,0,0,0,0,2,0,0,0,0,0,0,0,3,0,1,1,3,0,5,0,0,0,0,0,0,0,0,5,1,0,0,0,0,3,0],
[0,17,2,0,0,7,3,5,0,3,31,30,1,2,3,5,2,13,147,1,13,0,1,7,11,0,41,6,12,0,12,1,6,3,7,1,3,20,12,2,1,8,4,61,16,3,3,1,9,1,74,0,0,13,1,0,17,17,0,0,7,1,31,3,3,4,1,0,1,0,0,6,16,0,1,1,0,98,0],
[1,10,9,8,2,4,13,1,1,10,11,77,16,8,26,6,9,10,78,9,76,3,1,5,30,0,57,43,62,1,3,4,9,5,6,3,1,9,34,4,25,24,10,155,46,6,3,3,20,3,38,0,3,36,4,8,46,46,1,1,85,1,48,2,8,20,2,0,8,11,8,14,4,2,2,1,0,22,1],
[1,30,66,0,20,8,0,28,36,3,7,107,32,10,3,7,0,93,10,41,38,8,42,27,27,10,15,1,6,0,18,1,27,16,13,0,2,3,12,119,2,22,58,33,51,21,24,0,4,18,6,6,92,0,150,24,62,28,65,62,1,0,21,41,52,30,52,3,14,1,4,1,50,17,6,30,24,8,23],
[0,4,0,12,0,7,18,2,0,0,0,30,3,0,14,2,1,2,45,0,28,0,0,0,12,0,41,80,57,1,1,0,0,1,4,3,6,3,29,2,49,11,3,25,7,2,18,4,30,0,11,0,1,7,1,2,29,15,0,0,33,0,7,1,2,9,0,0,0,6,8,10,3,4,0,0,0,6,0],
[0,38,7,1,5,29,1,29,3,4,43,49,21,30,1,12,6,23,3,25,46,0,2,52,25,5,13,6,1,1,11,2,27,16,44,2,1,2,5,18,9,39,19,33,12,12,31,10,24,3,10,25,25,11,15,8,31,34,2,12,10,0,24,11,15,37,10,2,15,3,0,3,38,0,4,13,5,26,7],
[0,44,122,1,10,11,0,18,8,1,70,72,17,19,2,4,3,60,3,48,57,0,4,49,29,5,20,4,1,0,20,0,24,11,32,0,1,7,7,55,2,29,50,47,25,35,69,2,0,11,5,43,33,5,34,28,43,38,27,6,2,0,14,27,57,43,12,5,39,1,1,0,57,4,0,13,10,11,54],
[2,18,7,11,6,42,16,41,3,18,37,130,25,7,6,199,32,32,51,57,115,8,10,26,143,3,47,16,21,0,10,17,14,1,75,22,1,57,111,23,15,29,69,90,58,20,62,51,35,4,59,2,51,42,24,7,94,144,3,4,112,6,98,53,25,44,3,1,21,20,6,16,84,7,15,14,5,70,8],
[2,40,9,3,16,8,3,56,11,7,13,70,7,3,6,6,0,58,13,28,44,0,4,26,31,6,18,1,5,0,10,2,23,10,7,1,0,3,81,38,9,15,18,70,42,21,20,7,4,1,21,3,32,5,31,19,103,28,4,16,28,1,30,45,66,24,2,1,18,3,2,20,73,13,0,16,6,23,34],
[1,31,32,1,3,17,1,12,2,5,19,44,11,10,1,10,16,4,25,16,32,2,4,41,26,2,16,0,11,0,0,5,38,9,27,0,0,9,6,3,5,19,19,21,20,33,28,7,7,5,11,1,9,4,9,3,37,23,1,1,13,0,13,14,5,55,2,1,8,0,3,0,37,1,0,9,1,10,8],
[0,37,26,0,6,6,0,8,19,5,21,84,30,6,0,4,1,28,8,38,27,0,14,19,24,2,14,4,5,0,9,3,98,0,31,0,1,4,8,27,30,29,38,72,19,25,33,2,6,8,10,12,18,4,29,17,47,45,17,2,10,1,20,13,28,31,10,6,12,4,10,0,61,18,0,11,9,11,8],
[0,12,11,1,0,16,0,3,0,0,4,41,5,0,0,0,10,1,1,2,25,0,1,8,19,0,3,1,1,0,0,1,4,0,8,0,0,0,0,0,2,7,3,26,5,6,2,13,2,0,5,0,5,5,2,1,27,16,0,1,2,0,8,1,1,4,1,10,0,0,0,0,6,0,1,1,0,4,0],
[0,3,0,14,1,1,14,0,0,1,1,41,0,0,16,2,1,5,29,2,20,1,2,4,7,0,33,22,66,1,1,1,3,0,7,6,3,6,35,2,52,15,0,35,6,3,1,1,45,0,14,1,0,1,2,0,14,19,2,1,15,0,18,1,0,2,1,0,0,9,6,5,1,1,0,1,0,5,3],
[0,1,30,0,5,0,0,16,1,0,9,3,12,43,0,0,0,1,0,14,1,0,4,8,1,29,0,0,0,0,2,0,6,80,4,0,0,0,2,37,0,1,15,4,3,2,5,2,0,3,2,7,3,0,5,14,0,1,2,2,0,0,2,7,1,2,10,7,6,0,0,0,28,2,0,9,12,2,66],
[1,2,3,4,8,8,4,7,0,5,16,49,0,0,33,23,4,10,69,3,18,3,6,25,9,0,41,4,17,0,6,6,5,1,11,5,0,66,42,8,9,7,6,43,16,18,8,5,16,0,5,3,7,7,4,1,27,49,1,4,62,0,31,3,7,12,0,0,4,6,5,1,9,0,10,9,1,49,3],
[0,7,15,1,5,14,1,3,6,0,23,16,8,15,0,0,0,14,0,20,18,1,1,7,2,0,4,5,0,0,0,1,10,18,24,0,0,1,2,9,2,24,40,6,3,6,7,0,0,3,1,11,2,12,7,9,16,6,0,4,1,0,2,11,3,8,13,0,4,0,1,0,1,5,0,3,29,6,16],
[1,51,64,0,9,2,3,45,5,3,12,57,8,4,2,1,4,59,3,39,79,2,10,37,16,3,14,2,8,0,12,1,8,0,18,0,0,4,7,97,1,11,36,35,40,26,24,2,3,2,8,4,10,2,39,19,25,17,15,17,10,0,13,8,29,45,7,0,59,1,0,0,43,14,3,20,2,9,10],
[3,5,13,1,0,6,4,9,0,8,5,29,4,0,1,21,14,10,6,0,11,0,0,4,31,0,14,2,3,1,13,1,7,0,7,0,3,23,17,1,1,25,3,26,12,3,4,1,1,0,4,1,6,20,3,1,14,11,0,0,6,2,27,0,1,3,0,0,3,1,3,0,15,0,5,3,0,44,2],
[0,57,24,3,16,18,1,54,5,5,45,59,5,8,1,3,1,58,1,35,47,0,11,25,13,2,14,1,7,0,32,0,18,6,12,0,0,1,15,160,0,22,33,27,30,13,26,3,1,13,4,9,30,7,30,45,39,35,15,31,12,0,13,27,94,55,39,0,14,0,3,0,41,19,0,11,11,7,5],
[2,11,39,0,10,6,2,16,4,4,16,42,4,44,0,2,1,57,8,52,49,0,50,13,7,6,5,0,2,0,5,0,4,5,4,0,1,0,2,33,0,9,40,5,21,5,13,2,0,8,4,9,20,7,34,28,20,13,8,10,1,0,5,20,59,22,10,0,96,0,0,1,37,3,2,9,24,9,30],
[1,57,15,26,23,16,14,60,17,4,99,95,35,32,3,27,5,99,19,37,66,3,4,98,40,1,18,26,6,0,15,6,4,1,69,6,3,11,49,33,19,22,48,136,112,53,52,12,17,1,15,19,25,11,37,23,82,53,13,11,9,0,32,14,48,74,34,0,24,8,2,0,108,5,20,30,4,20,11],
[3,67,5,30,20,25,16,34,1,15,36,64,31,3,6,40,5,14,46,22,72,6,7,71,41,3,55,33,38,0,12,3,42,12,43,18,1,46,43,29,34,33,17,69,34,28,55,14,31,2,54,1,13,8,15,8,44,96,8,10,35,0,51,16,16,41,8,16,12,23,41,3,58,5,10,6,0,31,4],
[0,7,12,0,15,1,1,6,11,0,1,14,11,11,0,0,1,18,1,8,5,0,43,4,5,5,0,3,3,0,0,0,58,3,14,0,0,1,1,86,0,8,31,7,18,5,8,1,0,2,1,0,13,1,28,17,3,8,24,19,2,0,0,9,15,13,25,0,2,0,0,0,8,4,0,3,2,1,12],
[0,6,13,1,7,0,1,28,9,0,3,6,3,4,0,2,0,8,1,7,31,0,10,8,9,8,4,0,13,0,12,0,2,8,8,0,0,1,2,47,1,13,15,6,21,4,9,0,1,1,6,3,21,0,29,13,20,7,16,2,4,0,7,17,21,11,15,6,6,0,0,0,18,8,0,32,2,1,13],
[0,13,5,3,0,6,13,5,3,1,0,68,3,2,12,3,0,2,40,3,22,0,2,4,31,0,56,22,40,3,2,1,5,2,1,17,4,7,91,1,16,15,1,104,15,11,9,1,27,0,65,2,6,5,8,3,11,40,0,9,35,0,35,0,3,17,0,0,0,7,4,4,6,0,0,1,1,15,1],
[1,0,0,11,0,0,0,0,0,0,0,6,0,2,0,3,0,0,2,0,2,0,0,0,0,0,0,3,1,1,0,1,1,0,0,0,0,1,0,1,0,4,0,5,0,0,0,0,0,0,2,0,0,1,0,0,0,0,0,0,0,0,9,1,1,0,0,0,0,0,0,0,0,0,2,0,0,3,0],
[9,33,6,8,5,12,3,23,0,20,11,44,28,21,1,35,21,23,18,4,105,1,0,18,24,5,24,7,19,2,11,9,21,2,8,0,1,23,35,16,12,11,13,91,21,12,22,1,16,0,32,2,21,20,12,12,49,40,4,5,43,6,46,6,24,24,4,0,9,11,4,8,36,1,6,8,1,40,2],
[0,49,30,0,10,1,0,50,29,1,14,38,5,4,1,1,5,31,3,24,23,0,14,29,14,7,18,6,1,0,1,0,7,3,9,0,0,1,3,55,0,12,32,54,42,26,26,1,1,3,3,1,11,1,42,21,12,29,7,18,0,0,2,7,13,36,27,6,9,0,0,0,28,14,0,17,11,3,28],
[0,17,30,0,11,3,2,35,14,1,3,53,7,4,4,0,1,51,3,33,58,1,4,7,10,4,34,3,1,0,11,0,3,8,8,0,0,5,6,43,2,10,37,28,76,12,28,2,3,2,7,2,71,3,79,37,71,15,15,15,3,0,20,20,20,31,4,3,15,0,2,1,28,5,0,12,4,11,17],
[1,42,11,0,14,13,0,29,12,11,57,71,37,11,2,7,5,38,9,30,41,0,13,31,38,5,13,5,8,0,10,6,46,8,59,2,1,3,21,46,12,33,70,55,16,61,30,6,2,4,8,7,61,30,59,30,63,49,5,21,21,14,27,36,32,45,8,0,19,0,36,0,107,12,6,40,5,24,14],
[0,6,19,0,13,1,2,24,35,1,6,25,2,11,0,1,2,39,0,23,30,0,32,11,4,4,4,0,4,0,10,0,1,4,4,0,0,0,0,49,0,6,14,4,4,6,13,0,0,6,1,10,18,2,40,25,21,7,16,15,0,0,4,16,13,15,9,2,5,0,0,0,22,23,0,25,25,0,19],
[0,0,7,0,0,0,0,0,0,0,10,2,5,9,0,0,0,0,0,8,1,0,0,2,3,1,0,0,0,0,0,0,10,5,4,0,0,0,0,1,0,1,5,1,1,1,1,2,0,4,0,0,0,0,0,3,0,16,0,8,0,0,0,6,0,0,4,0,1,0,0,0,2,0,0,4,4,0,33],
[0,19,83,0,2,2,1,7,2,0,26,38,13,12,0,1,1,13,0,33,31,0,3,14,7,2,9,0,6,1,2,0,14,15,32,0,0,0,1,2,0,14,32,8,10,7,18,1,0,6,2,6,26,9,24,149,27,15,1,4,0,0,8,9,6,19,4,1,16,0,0,0,21,3,1,6,12,5,4],
[0,0,0,3,1,2,11,0,1,3,0,8,0,0,18,0,0,2,7,0,2,0,1,0,3,0,21,17,9,1,4,0,1,0,1,2,0,1,24,1,11,3,4,11,2,0,0,0,13,0,7,0,2,3,0,2,10,1,0,0,7,1,7,0,5,0,1,0,0,0,2,5,4,0,0,0,0,10,0],
[0,6,0,7,0,0,1,3,0,0,1,14,1,0,1,0,5,0,4,2,6,0,1,1,5,0,12,16,27,0,1,0,3,0,2,10,0,3,7,0,6,1,1,14,1,1,1,1,21,0,1,0,0,8,3,0,4,4,0,0,3,0,8,1,0,17,0,0,1,4,6,12,3,0,0,0,0,3,0],
[0,2,0,10,0,0,0,1,1,1,0,9,2,0,1,0,0,1,3,0,26,0,0,2,1,0,23,14,16,0,1,0,1,0,1,1,2,1,10,2,13,3,0,39,3,0,1,0,6,0,2,0,0,0,0,2,3,2,0,0,3,0,2,0,1,0,0,0,0,3,10,0,1,0,0,0,0,1,0],
[0,83,26,4,15,11,7,57,30,1,13,122,15,16,0,6,4,42,38,33,87,0,56,44,83,3,33,16,5,0,24,0,30,5,37,2,0,14,24,61,9,35,55,67,64,30,47,6,7,8,9,4,26,5,41,28,82,84,20,35,15,0,25,23,43,65,37,1,17,11,2,1,69,10,1,21,10,33,14],
[0,5,7,0,4,2,0,3,6,1,1,9,1,2,0,0,0,3,0,10,8,0,18,1,1,0,1,4,0,0,6,0,1,1,0,0,0,1,2,25,2,3,10,4,11,3,61,1,2,0,1,16,3,1,15,3,1,3,5,3,1,0,3,15,5,19,16,0,3,0,1,0,9,1,0,0,2,1,3],
[0,7,0,0,0,1,0,0,0,6,1,16,0,1,1,27,7,2,1,1,28,9,0,1,8,0,12,4,0,1,1,2,3,1,2,0,0,2,2,4,0,3,4,35,3,1,1,0,0,0,2,0,2,1,0,0,17,7,0,0,0,3,14,1,0,4,0,0,0,0,1,0,0,0,3,0,0,35,1],
[0,7,4,0,6,9,2,15,9,0,13,24,4,0,0,1,4,5,2,14,11,3,6,5,12,0,6,0,1,0,4,1,8,0,15,0,0,0,3,22,0,8,16,12,22,5,7,2,1,12,4,4,14,4,23,5,38,8,2,34,1,0,4,30,8,26,25,5,8,0,0,1,18,1,2,8,3,3,8],
[0,2,23,0,11,1,0,4,2,0,6,9,0,7,0,0,0,7,1,22,1,0,2,1,3,2,3,0,0,0,5,0,1,0,8,0,0,0,1,23,0,1,24,2,2,1,5,0,0,16,0,33,8,0,8,29,0,4,3,4,1,0,2,7,5,4,19,5,8,0,0,0,13,0,0,2,8,0,25],
[6,19,2,3,4,27,7,9,3,33,9,74,12,3,7,126,25,20,43,4,36,8,9,11,14,0,52,9,12,5,5,18,17,0,10,4,0,42,41,10,10,21,13,73,20,11,19,16,5,3,24,2,13,23,11,3,65,52,5,2,28,2,44,3,12,22,5,0,3,6,0,0,13,1,21,2,0,41,0],
[0,11,56,0,10,1,0,17,9,0,23,8,8,26,0,0,0,8,0,38,8,1,7,9,6,13,2,0,1,1,5,0,8,15,6,0,0,0,1,28,0,8,33,6,27,9,2,0,0,47,2,24,8,0,9,29,8,14,14,5,0,0,11,21,14,18,21,8,6,0,0,0,18,6,0,6,28,1,37],

];

export default returns_clustered;