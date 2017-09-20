import os

for i in os.walk('.'):
    print("$scope.fotos = ", end="")
    print(i[2], end="")
    print(";")