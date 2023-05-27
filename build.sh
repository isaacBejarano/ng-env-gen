#!/usr/bin/bash

# AUX

genEnvAndChangeFolderBuild() {
    folderName=$1
    envType=$2
 
    # navigate to dist [after ng build] and enter the 1 of 2 folders not being config. Then rename it as the folderName Arg  
    eval "cd dist && find * -maxdepth 1 -type d -not -name "config" | xargs --replace={} mv -f {} $folderName"
    eval "find . -name "env.js" -exec rm {} \;"
    
    # if automatic -> $folderName has env.js  
    # else -> $folderName has no env.js but there're multiple folders with $envType env.js to choose from
    if [ -n "$envType" ] 
      then eval "cp ../src/env/$envType.env.js $folderName/env.js"     
    else 
      eval "mkdir -p config"
      eval "cd config && mkdir -p dev && cd .."
      eval "cd config && mkdir -p test && cd .."
      eval "cd config && mkdir -p uat && cd .."
      eval "cd config && mkdir -p prod && cd .."
      eval "cp ../src/env/dev.env.js config/dev/env.js"
      eval "cp ../src/env/test.env.js config/test/env.js"
      eval "cp ../src/env/uat.env.js config/uat/env.js"
      eval "cp ../src/env/prod.env.js config/prod/env.js" 
    fi
}

goAutomatic(){
  publicFolderName=$1

  echo Select a deploy mode:		
  sleep .5s

  automaticEnv=("TEST" "DEV" "UAT" "PROD")
  select auto in "${automaticEnv[@]}"
  do
  case $auto in      
    "TEST")				
      echo "You chose option: $REPLY"
      break
      ;;
    "DEV")					
      echo "You chose option: $REPLY"
      break
      ;;
    "UAT")					
      echo "You chose option: $REPLY"
      break
      ;;
    "PROD")				
      echo "You chose option: $REPLY"
      break
      ;;
    "UAT")
      break
      ;;
    *) echo "invalid option $REPLY";;
  esac
  done
  sleep .5s

  if [ $auto == "TEST" ]     
    then genEnvAndChangeFolderBuild $publicFolderName "test" 
  elif [ $auto == "DEV" ]     
    then genEnvAndChangeFolderBuild $publicFolderName "dev" 
  elif [ $auto == "UAT" ]     
    then genEnvAndChangeFolderBuild $publicFolderName "uat"
  elif [ $auto == "PROD" ]     
    then genEnvAndChangeFolderBuild $publicFolderName "prod" 
  else exit 0  
  fi

  echo "Deploy mode: $auto"
}

# PROGRAM

echo Generate environment file automatically?		
sleep 1s

deployType=("Yes" "No")
select deploy in "${deployType[@]}"
do
  case $deploy in      
    "Yes")				
      echo "Automatic environment file: $deploy"
      break
      ;;
    "No")				
      echo "Automatic environment file: $deploy"
      break
      ;;
    *) echo "invalid option $REPLY";;
  esac
done
sleep .5s

echo Please, write a name for the deployment public folder:		
sleep .5s

read publicFolderName

if [ $deploy == "Yes" ]     
  then goAutomatic $publicFolderName
elif [ $deploy == "No" ]     
  then genEnvAndChangeFolderBuild $publicFolderName
else exit 0
fi
sleep .5s

echo Environment files generated
