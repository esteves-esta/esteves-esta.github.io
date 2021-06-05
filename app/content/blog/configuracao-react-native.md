---
title: Configurando ambiente React Native no Ubuntu
date: "2020-02-16"
description: Documentando os passos para usar React Native no ubuntu
---

> Os passos abaixo vem de diversos artigos e sites listados no final e também com a experiência de realizar o processo algumas vezes.

## Instalação

### Gerenciadores de Pacote

**NODE.JS**


  * curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
  
  * sudo apt-get install -y nodejs
 
Depois se certificar que foram instalados o node: `node -v`; e o npm: `npm -v`.


---


### GIT
A instalação do git para controle de versionamento de projetos:

```
sudo apt-get install git

# verificando a instalação:  
git --version
```


---

### Java - JDK8

```
# 1. adicionar a local de intalação
sudo add-apt-repository ppa:openjdk-r/ppa` 
    
# 2. atualizar o apt-get
sudo apt update
    
# 3. Checar a lista de itens para atualizar
apt list --upgradable
    
# 4. e finalmente instala-lo: 
sudo apt install openjdk-8-jdk
    
# 5. Testar a instalação do JDK 
java -version
```
---


### Visual Code
O download pode ser feito pelo aplicativo padrão do Ubuntu, o Software Ubuntu, ou através de um arquivo de instalação de extensão .dev encontrado no site oficial. Pelo arquivo é necessário o seguinte comando para instalar o programa:

```
sudo dpgk -i /caminho/para-o/arquivo.deb
```

---


### Android Studio
Também pode ser feito o download feito pelo Software Ubuntu ou pelo comando abaixo. Depois de instalado é necessário abrir o aplicativo e concluir a instalação: 
```
sudo snap install android-studio --classic
```

Após a instalação devem ser adicionadas as variáveis de ambiente, as linhas abaixo, no final do arquivo **/home/seu-usuario/.bashrc**. Verifique a pasta onde está seu android studio e se necessário troque o caminho nas linhas abaixo para se adequar a sua instalação.

```
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/emulator 
export PATH=$PATH:$ANDROID_HOME/tools 
export PATH=$PATH:$ANDROID_HOME/platform-tools
```
Depois é necessário atualizar o arquivo no seu terminal com o comando: 
```
source /.bashrc
```

> (Opcional) Dependendo do computador o android studio pode informar que é possivél configurar a aceleração de virtualização de hardware do Ubuntu.

Os comando podem variar dependendo da distribuição do linux, todas as variações se encontram na setuinte página do [site oficial do Ubuntu](https://help.ubuntu.com/community/KVM/Installation#Install_Necessary_Packages). 

---


### Emulador

Após a configuração do android studio, instalar um emulador através do **sdk manager** e escolher o tipo de celular e sdk do android. 

O emulador pode ser aberto usando o android studio ou pelo terminal. 

O comando `emulator -avd -list-avds` lista todos os emuladores existentes, se não aparecer nada na lista de emuladores pode se tentar rodar uma primeira vez pelo android studio. 

Com o nome dele é possível iniciá-lo com o comando `emulator -avd NOME-DO-EMULADOR`. E verificar quais emuladores estão conectados através de `adb devices`.

Pode ser adicionado um atalho do comando para rodar o emulador no arquivo **.bashrc** onde foram colocadas as variáveis de ambiente. Exemplo: `alias run-emu="emulator -avd NOME-DO-EMULADOR"`



#### Resolver erros com o emulador

##### Erro de permissão no */dev/kvm*

1. Instalar o qemu-kvm
`sudo apt install qemu-kvm`

2. Depois adicionar seu usuário no grupo kvm
`sudo adduser <username> kvm`

3. Verificar se está adicionado ao grupo
`grep kvm /etc/group`

4. Adicionar seu usuário como dono do diretório:
`sudo chown <username> /dev/kvm`

1. Se após todos os comando continuar com o erro tentar mudar permissão do diretório:
`sudo chmod 777 -R /dev/kvm`

---



### Watchman

1. Instalar dependências: `sudo apt install -y autoconf automake build-essential libtool pkg-config libssl-dev python-dev`
2. Clonar o repositório: `git clone https://github.com/facebook/watchman.git`
3. entrar na pasta criada `cd watchmangit`, e depois `git checkout v4.9.0` 
4. `/autogen.sh./configure --enable-lenient`
5. `make`
6. `sudo make install`

---


### Resolver erros com o watchman

##### Erro 'System limit of number of file watchers reached' ou 'inotifier....'

Tentar alguns dos comando abaixo: 

```
# 1
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

# 2
echo 999999 | sudo tee -a /proc/sys/fs/inotify/max_user_watches && echo 999999 | sudo tee -a /proc/sys/fs/inotify/max_queued_events && echo 999999 | sudo tee -a /proc/sys/fs/inotify/max_user_instances && watchman shutdown-server && sudo sysctl -p 

# 3
watchman watch-del-all

# 4
watchman shutdown-server
```

---


### React Native Cli
Instalar (globalmente) o React Native pelo: 
* NPM: `npm install -g react-native-cli`
* YARN: `yarn global add react-native-cli`

---


### Rodar seu aplicativo React Native

1. Instalar o aplicativo no emulador/dispositivo (rodar o comando dentro do repositório onde está seu código): `> react-native run-android`

2. Iniciar o servidor: `> react-native start`

3.  (EMULADOR) Abrir o menu (ctrl+m) e entrar no *dev settings* do emulador e inserir seu ip e a porta. Exemplo: 192.168.15.10:8081. O seu ip pode ser descoberto com o comando `ip addr show`.

4. [(CELULAR)](https://facebook.github.io/react-native/docs/running-on-device) Após conectar o celular ao computador por usb, e configurar o celular ao permitir as **opções de desenvolvedor**, usar o comando `lssub` para pegar o código do celular; depois usar o comando  trocando **04e8** pelo código do celular: 

```
echo 'SUBSYSTEM=="usb", ATTR{idVendor}=="04e8", MODE="0666", GROUP="plugdev"' | sudo tee /etc/udev/rules.d/51-android-usb.rules
```

Verificar se o celular está conectado pelo comando `adb devices`.



---



### Erros ao rodar o aplicativo

#### 'Could not install the app on the device, read the error above for details' 
Este erro pode ser resolvido mudando a permissão do seguinte arquivo **/seu-projeto-react-native/android/gradlew** com o comando: `chmod 755 /seu-projeto-react-native/android/gradlew`


#### Erro com o arquivo .debug-keystore
Se o projeto foi clonado de um repositório remoto como o github pode ocorrer de o arquivo **.gitignore** ignorar o arquivo **.debug-keystore** e sem ele não é possível rodar o projeto. Você pode pegar o arquivo de algum outro projeto que você possua do react native ou gera-lo pelo android studio com os seguintes passos:


#### error: bundling failed: Error: Unable to resolve module './chunk-2fd513a6.js'' from ''node_modules/@redux-saga/core/dist/redux-saga-effects.prod.cjs.js:

- Limpar cache do yarn e npm:

```
yarn cache clean

npm cache clean --force
```

- Limpar cache do react-native

```
react-native start --reset-cache

```

---


## Links de Referência
- https://stackoverflow.com/questions/50328656/dev-kvm-permission-denied-android-emulator

- https://medium.com/@jeancabral/instalando-e-configurando-react-native-no-ubuntu-18-04-e3329ac090a0

- https://medium.com/dooboolab/running-react-native-app-in-ubuntu-18-04-7d1db4ac7518

- https://medium.com/@wnyao0830/run-create-react-native-app-on-android-studios-emulator-ad678a0c362f

- https://docs.rocketseat.dev/ambiente-react-native/android/linux#configurando-sdk-do-android-no-linux

- https://help.ubuntu.com/community/KVM/Installation#Install_Necessary_Packages

- https://askubuntu.com/questions/770374/user-limit-of-inotify-watches-reached-on-ubuntu-16-04

- https://github.com/fabiossantoss/deb_app_mobile/blob/master/package.json

- https://stackoverflow.com/questions/42554337/cannot-launch-avd-in-emulatorqt-library-not-found

- https://stackoverflow.com/questions/47075661/error-user-limit-of-inotify-watches-reached-extreact-build

- https://stackoverflow.com/questions/32572399/android-failed-to-load-js-bundle

- https://stackoverflow.com/questions/54541734/spawnsync-gradlew-eacces-error-when-running-react-native-project-on-emulator-u

- https://github.com/facebook/react-native/issues/8868

