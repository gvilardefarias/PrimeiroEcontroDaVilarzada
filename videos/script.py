import os

for i in os.walk('.'):
    print("$scope.videos = ", end="")
    print(i[2], end="")
    print(";")