# Componente

`ThfRangeComponent`

O `thf-range` permite que o desenvolvedor configure o componente de acordo com as necessidades estabelecidas pelo projeto em questão.

# Boas práticas

- Evite `label` extensos que quebram o layout do `thf-range`, use `labels` diretos, curtos e intuitivos.
- Evite valores com muitas casas decimais que quebram o layout do `thf-range`.

### **Selector**

```
<thf-range 
    [t-change]="EventEmitter"
    [t-min]="number" 
    [t-max]="number" 
    [t-inicio]="number" 
    [t-fim]="number" 
    [t-step]="number"
    [t-com-indicadores]="boolean"
    [t-disabled]="boolean">
</thf-range>
```

### **Propriedades**   

 Nome | Tipo | Padrão | Descrição
--------|------|:------:|------
t-change|`EventEmitter`|-|Ação que será executada quando o usuário mudar os valores do componente `thf-range`. Este evento emite o menor e o maior valor selecionado
t-label |`string`|-| label do componente
t-min |`number`|-| valor mínimo do componente `thf-range`
t-max |`number`|-| valor máximo do componente `thf-range`
t-inicio |`number`|-| valor inicial do `thf-range`
t-fim |`number`|-| valor final do `thf-range`
t-step |`number`|-| valor do step do componente `thf-range`
t-moeda |`boolean`|`false`| habilita máscara de moeda nos indicadores
t-com-indicadores |`boolean`|`false`| habilita a visualização para o usuário dos valores selecionados no `thf-range`
t-disabled |`boolean`|`false`| desabilita o `thf-range` impedindo que o usuário interaja com o mesmo