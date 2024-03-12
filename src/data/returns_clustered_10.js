const returns_clustered = [
    [2,2,0,11,0,0,10,0,3,5,1,0,2,0,2,3,2,0,0,2,3,0,0,0,1,2,0,0,1,0,9,0,4,28,3,2,0,0,1],
    [0,40,20,1,6,2,44,64,6,105,35,25,2,10,12,16,34,8,65,83,22,8,28,8,140,3,60,13,20,7,103,40,7,64,51,13,16,2,15],
    [0,12,50,1,34,0,15,22,1,25,107,12,2,25,10,2,10,37,33,45,0,5,121,25,146,1,71,1,0,43,45,55,2,28,24,4,110,23,67],
    [9,7,0,48,1,24,9,9,92,21,6,56,5,0,12,0,2,0,24,1,2,26,2,1,10,1,5,19,5,3,35,0,43,54,1,16,3,0,1],
    [0,3,34,3,3,0,3,27,3,18,18,3,1,11,0,0,6,51,28,64,0,0,3,18,58,0,18,0,0,13,48,3,4,13,14,1,29,18,18],
    [1,2,0,10,1,9,9,11,28,7,5,73,3,0,2,0,1,1,0,11,0,34,0,0,8,1,4,13,2,7,14,0,25,24,2,16,4,0,1],
    [6,37,14,6,4,9,74,42,26,90,24,70,22,5,26,91,15,7,50,27,28,9,20,19,32,7,101,11,32,4,151,20,16,122,43,38,8,3,7],
    [3,74,27,7,38,13,51,139,39,131,71,96,11,10,12,7,32,109,93,177,3,9,30,65,185,0,148,23,17,60,283,12,17,190,42,29,67,21,72],
    [2,11,2,91,1,25,45,31,239,44,6,206,10,0,10,4,2,1,28,25,1,122,6,1,32,1,28,70,164,7,160,0,126,113,17,118,3,0,3],
    [4,93,14,82,22,24,86,121,81,198,69,129,9,28,19,41,63,25,133,59,28,38,76,19,72,2,252,43,43,19,276,29,52,184,107,50,45,4,27],
    [0,50,109,6,20,2,40,103,5,98,71,31,2,9,9,4,20,66,131,111,2,2,110,34,139,0,130,2,5,45,132,22,6,103,51,8,69,44,81],
    [3,19,13,47,11,50,53,59,183,116,33,118,14,5,35,64,18,15,49,43,12,49,33,25,54,0,68,107,38,14,184,9,75,224,47,55,26,5,9],
    [3,2,1,3,0,3,25,8,10,10,3,10,6,1,26,12,2,2,6,5,3,1,0,0,2,0,3,2,1,2,44,0,1,23,1,8,3,1,1],
    [0,6,31,1,10,2,5,9,1,24,14,7,1,4,1,0,3,8,28,9,1,1,32,2,7,0,26,0,0,17,17,44,2,16,11,1,13,48,28],
    [4,17,16,3,0,2,49,18,5,34,10,23,30,1,25,22,8,0,7,6,5,4,10,1,12,1,15,5,27,10,39,3,3,57,20,9,3,2,0],
    [5,25,7,2,1,2,83,9,6,25,6,44,17,0,18,26,2,2,9,8,21,3,8,3,7,2,19,3,7,0,105,2,6,175,9,27,1,2,6],
    [1,29,2,0,13,0,24,20,4,55,33,22,0,9,2,0,11,6,79,12,3,3,21,70,24,1,64,7,5,2,61,10,3,46,32,4,10,0,14],
    [0,15,38,0,61,0,5,101,7,22,94,8,0,7,1,2,5,35,109,66,0,5,54,63,97,0,28,8,2,34,82,23,3,24,17,5,52,27,106],
    [11,67,27,46,20,2,44,116,29,108,136,39,5,8,30,11,98,74,104,125,6,8,89,38,179,0,186,17,5,39,153,18,41,158,87,13,91,14,30],
    [0,64,68,7,74,8,32,200,15,62,98,59,9,3,3,3,24,75,135,239,1,8,88,46,210,0,61,18,30,97,272,23,6,122,29,26,121,8,163],
    [5,16,0,1,0,1,38,3,3,24,4,9,7,0,3,26,4,2,4,3,18,0,0,0,3,2,7,1,3,1,47,1,3,52,6,8,1,0,4],
    [0,5,0,25,0,34,6,7,141,29,1,82,1,1,2,3,4,2,4,8,1,45,3,3,0,1,9,11,11,3,50,0,47,71,6,21,2,1,4],
    [1,51,124,2,11,0,27,41,11,57,101,27,0,46,14,6,26,58,84,62,2,3,117,7,102,1,134,3,26,12,137,39,4,104,87,9,206,17,33],
    [0,15,29,1,27,0,9,40,4,15,44,3,1,3,2,1,34,62,29,54,0,0,6,94,73,0,36,2,0,55,24,11,1,19,22,11,54,6,94],
    [0,125,86,4,34,2,21,218,18,116,141,63,10,1,14,3,27,93,163,196,5,5,128,66,116,0,152,13,12,104,262,24,6,149,46,23,105,41,148],
    [5,1,0,0,0,0,3,1,0,0,0,1,2,0,2,2,1,0,0,0,3,1,1,0,0,0,0,2,0,0,0,0,0,3,1,1,0,0,0],
    [0,77,74,18,9,3,78,124,56,203,147,64,8,42,17,19,57,72,195,73,2,19,105,23,127,2,258,4,24,28,241,63,20,229,116,26,83,29,54],
    [0,18,5,20,0,9,15,8,86,56,2,115,1,0,5,4,2,10,13,10,1,28,4,2,7,1,6,26,9,1,80,2,12,90,10,40,4,0,1],
    [0,14,3,2,0,3,67,37,128,26,7,58,5,1,16,7,8,0,9,16,2,18,23,0,11,1,9,8,40,8,41,2,12,84,29,69,3,0,1],
    [0,15,24,0,21,5,5,56,4,23,46,25,1,10,15,1,16,49,22,96,10,2,15,46,117,0,28,3,11,33,64,4,1,38,29,7,21,9,71],
    [7,86,44,18,43,15,127,323,118,299,209,152,20,10,37,100,58,91,210,300,57,64,167,16,303,0,309,88,34,46,341,30,32,385,117,56,140,6,109],
    [0,20,74,0,0,1,13,9,1,49,33,8,0,46,0,1,15,23,9,13,0,1,42,4,22,2,78,3,0,9,34,51,1,37,34,0,52,50,50],
    [1,8,2,45,2,24,11,13,131,26,6,68,0,1,5,7,2,4,28,7,0,42,1,0,6,0,14,18,9,3,43,1,51,43,9,31,4,0,1],
    [18,70,28,33,9,38,126,204,94,164,82,213,34,11,52,183,53,28,156,110,29,65,101,15,145,3,221,85,57,38,458,35,65,260,92,108,91,8,46],
    [0,60,19,2,7,4,44,46,6,111,53,21,10,18,10,18,30,17,81,33,5,8,98,12,50,1,117,3,38,17,84,42,11,103,71,7,31,11,32],
    [2,5,3,15,6,28,52,24,100,74,13,89,9,1,4,31,6,2,21,23,12,23,22,5,13,1,45,41,61,8,71,0,17,104,4,17,4,1,5],
    [3,25,91,0,44,0,18,67,10,75,110,31,4,8,18,4,8,64,62,153,1,2,155,63,106,0,79,5,4,25,109,52,1,70,28,7,110,26,116],
    [0,3,30,0,17,0,1,30,0,9,36,2,0,61,0,0,7,27,9,6,0,0,16,7,24,0,21,0,0,25,8,51,0,11,13,4,29,27,100],
    [0,37,71,4,24,0,9,49,10,47,70,19,5,17,2,2,11,118,50,150,0,5,58,70,133,0,52,1,5,61,84,36,0,80,24,7,98,74,79]
]

export default returns_clustered;