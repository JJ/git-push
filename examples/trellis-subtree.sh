git remote add trellis https://github.com/roots/trellis.git
git fetch trellis
git checkout -b trellis trellis/master
git checkout master
git read-tree --prefix=trellis/ -u trellis/master
git commit -am "Añade subrama para trellis"
