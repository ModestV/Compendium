<font color="#F1A5CF"><u>Теорема 4 (связь матриц оператора в разных базисах)</u></font>
$\forall$ базисов $Б$ и $Б'$ конечномерного пространство $V$ и $\forall$ ЛО $\hat{A}$, действующий в V: $$
\left[ \hat{A} \right]_{Б'} = T_{Б' \to Б} \cdot\left[ \hat{A} \right]_{Б}\cdot T_{Б \to Б'}
$$
<font color="#60d6a7"><u>Доказательство.</u></font>
$$[\hat{A}(\bar{x})]_{Б} = [\hat{A}]_{Б}\cdot[\bar{x}]_{Б}=[\hat{A}]_{Б}\cdot T_{Б→Б'}\cdot [\bar{x}]_{Б'}$$
$$[\hat{A}(\bar{x})]_{Б}=T_{Б→Б'}\cdot[\hat{A}(\bar{x})]_{Б'}=T_{Б \to Б'}\cdot\left[ \hat{A} \right]_{Б'} \cdot\left[ \bar{x}\right]_{Б'}$$
$\underbrace{T_{Б \to Б'}\cdot\left[ \hat{A} \right]_{Б'}}_{C} \cdot\left[ \bar{x}\right]_{Б'}=\underbrace{\left[ \hat{A} \right]_{Б}\cdot T_{Б \to Б'}}_{D}\cdot\left[ \bar{x}\right]_{Б'}$ - и так $\forall  \bar{x}\in V \iff \forall$ матрицы-столбца, которую мы берём в качестве $[\bar{x}]_{Б'}$
$\forall  \bar{x}_{n\times_{1}}$    $C_{n\times n}  \bar{x}_{n\times1}=D_{n\times n}\cdot  \bar{x}_{n\times1}$
Возьмём:
$$\bar{x}_{n\times1}=\begin{pmatrix}1 \\ 0 \\ 0 \\ \vdots \\ 0\end{pmatrix}$$
$$
\begin{pmatrix}
C_{11} \\
C_{21} \\
\vdots \\
C_{n1}
\end{pmatrix}=\begin{pmatrix}
D_{11} \\
D_{21} \\
\vdots \\
D_{n1}
\end{pmatrix}
$$Возьмём:
$$\bar{x}_{n\times1}=\begin{pmatrix}0 \\ 1 \\ 0 \\ \vdots \\ 0\end{pmatrix}$$
$$
\begin{pmatrix}
C_{12} \\
C_{22} \\
\vdots \\
C_{n2}
\end{pmatrix}=\begin{pmatrix}
D_{12} \\
D_{22} \\
\vdots \\
D_{n2}
\end{pmatrix}
$$
$$
\dots\dots\dots\dots\dots\dots\dots\dots\dots\dots.
$$
Возьмём:
$$\bar{x}_{n\times1}=\begin{pmatrix}0 \\ 0 \\  \vdots \\0 \\
 1\end{pmatrix}$$
 $$
\begin{pmatrix}
C_{1n} \\
C_{2n} \\
\vdots \\
C_{nn}
\end{pmatrix}=\begin{pmatrix}
D_{1n} \\
D_{2n} \\
\vdots \\
D_{nn}
\end{pmatrix}
$$
$$T_{Б \to Б'}\cdot\left[ \hat{A} \right]_{Б'} =\left[ \hat{A} \right]_{Б}\cdot T_{Б \to Б'}$$
$$[\hat{A}]_{Б'}=T_{Б \to Б'}^{-1}\cdot[\hat{A}]_{Б}\cdot T_{Б \to Б'}$$
$$[\hat{A}]_{Б'}=T_{Б' \to Б}\cdot[\hat{A}]_{Б}\cdot T_{Б \to Б'}$$
<font color="#F1A5CF"><u>Теорема 5 (Связь алгебры ЛО с алгеброй их матриц)</u></font>
Пусть $\hat{A}$ и $\hat{B}$ - ЛО, действующий в конечномерном ЛП $V$; Б - некоторый базис $V$. Тогда:
1. $\left[ \hat{A}+\hat{B} \right]_{Б}=[\hat{A}]_{Б}+[\hat{B}]_{Б}$
2. $[\hat{A}\hat{B}]_{Б}=[\hat{A}]_{Б}[\hat{B}]_{Б}$
3. $\forall \alpha \in P$    $[\alpha  \hat{A}]_{Б}=\alpha[\hat{A}]_{Б}$

<font color="#60d6a7"><u>Доказательство.</u></font>
1. $(\hat{A}+\hat{B})(\bar{x})=\hat{A}(\bar{x})+\hat{B}(\bar{x})$
	$[(\bar{A}+\bar{B})(\bar{x})]_{Б}=[\hat{A}+\hat{B}]_{Б}\cdot[\bar{x}]_{Б}$
	$[\hat{A}(\bar{x})]+\hat{B}(\bar{x})]_{Б}=[\hat{A}(\bar{x})]_{Б}+[\hat{B}(\bar{x})]_{Б}=[\hat{A}]_{Б}\cdot[\bar{x}]_{Б}+[\hat{B}]_{Б}\cdot[\bar{x}]_{Б}$
$=([\hat{A}]_{Б}+[\hat{B}]_{Б})[\bar{x}]_{Б}$
	$[\hat{A}+\hat{B}]_{Б}\cdot[\bar{x}]_{Б}=([\hat{A}]_{Б}+[\hat{B}]_{Б})[\bar{x}]_{Б}$ - это верно для любого $\bar{x}\implies[\text{тот же приём, что в теореме 4}]=\left[ \hat{A}+\hat{B} \right]_{Б}=[\hat{A}]_{Б}+[\hat{B}]_{Б}$ 
2. $(\hat{A}\hat{B})(\bar{x})=\hat{A}(\hat{B}(\bar{x}))$
$[(\hat{A}\hat{B})(\bar{x})]_{Б}=[\hat{A}\hat{B}]_{Б}[\bar{x}]_{Б}$
$[\hat{A}(\hat{B}(\bar{x}))]_{Б}=[\hat{A}]_{Б} \cdot [\hat{B}(\bar{x})]_{Б}=[\hat{A}]\cdot[\hat{B}]_{Б}\cdot[\bar{x}]_{Б}$
$[\hat{A}\hat{B}]_{Б}[\bar{x}]_{Б}=[\hat{A}]_{Б}[\hat{B}]_{Б}[\bar{x}]_{Б}$ - это верно для любого $\bar{x}\implies[\dots]\implies[\hat{A}\hat{B}]_{Б}=[\hat{A}]_{Б}[\hat{B}]_{Б}$
3. $(\alpha  \hat{A})(\bar{x})=\alpha \cdot(\hat{A}(\bar{x}))$
$[(\alpha  \hat{A})(\bar{x})]_{Б}=[\alpha  \hat{A}]_{Б}\cdot[\bar{x}]_{Б}$
$[\alpha \cdot(\hat{A}(\bar{x}))]_{Б}=\alpha \cdot[\hat{A}(\bar{x})]_{Б}=\alpha[\hat{A}]_{Б}[\bar{x}]_{Б}$
$[\alpha  \hat{A}]_{Б}[\bar{x}]_{Б}=\alpha[\hat{A}]_{Б}[\bar{x}]_{Б}$ - это верно для любого $\bar{x}\implies[\dots\implies][\alpha  \hat{A}]_{Б}=\alpha[\hat{A}]_{Б}$


Данная теорема, строго говоря, должна предшествовать утверждению линейности, но линейность очевидна:
$$
(\hat{A}+\hat{B})(\alpha  \bar{x}+\beta  \bar{y})=\hat{A}(\alpha  \bar{x}+  \beta  \bar{y})+\hat{B}(\alpha  \bar{x}+  \beta  \bar{y})=
$$
$$
\alpha  \hat{A}(\bar{x})+\beta  \hat{A}(\bar{y})+\alpha  \hat{A}(\bar{x})+\alpha  \hat{A}(\bar{x})
$$

