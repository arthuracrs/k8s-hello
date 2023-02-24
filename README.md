# k8s-hello

- Common erros:    
    erro: upstream something nginx error 502

```
microk8s.inspect
```

result: Ptables FORWARD policy is DROP. Consider enabling traffic forwarding with: sudo iptables -P FORWARD ACCEPT

forma de consertar
```
sudo iptables -P FORWARD ACCEPT
```

depois precisa da reboot na maquina
```
sudo reboot
```