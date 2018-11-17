git checkout trellis
git pull
git checkout master
git merge -X subtree=trellis/ --squash trellis/master
git commit
