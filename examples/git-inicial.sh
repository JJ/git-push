git clone git@github.com:JJ/trellis-test.git
git clone --depth=1 git@github.com:roots/trellis.git
rm -rf trellis/.git # Elimina el repo de git
git add trellis
git commit -am "Descarga última versión trellis"
git tag -a v1 -m "Versión original"
git push --tags
git push origin master
