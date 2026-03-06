<font color="#F1A5CF"><u>Теорема 4 (связь матриц оператора в разных базисах)</u></font>
$\forall$ базисов $Б$ и $Б'$ конечномерного пространство $V$ и $\forall$ ЛО $\hat{A}$, действующий в V: $$
\left[ \hat{A} \right]_{Б'} = T_{Б' \to Б} \cdot\left[ \hat{A} \right]_{Б}\cdot T_{Б \to Б'}
$$

$[\hat{A}(\bar{x})]_{Б} = [\hat{A}]_{Б}\cdot[\bar{x}]_{Б}=[\hat{A}]_{Б}\cdot T_{Б→Б'}\cdot [\bar{x}]_{Б'}$
$[\hat{A}(\bar{x})]_{Б}=T_{Б→Б'}\cdot[\hat{A}(\bar{x})]_{Б'}=T_{Б \to Б'}\cdot\left[ \hat{A} \right]_{Б'} \cdot\left[ \bar{x}\right]_{Б'}$
$\underbrace{T_{Б \to Б'}\cdot\left[ \hat{A} \right]_{Б'}}_{C} \cdot\left[ \bar{x}\right]_{Б'}=\underbrace{\left[ \hat{A} \right]_{Б}\cdot T_{Б \to Б'}}_{D}\cdot\left[ \bar{x}\right]_{Б'}$ - и так $\forall  \bar{x}\in V \iff \forall$ матрицы-столбца, которую мы берём в качестве $[\bar{x}]_{Б'}$
$\forall  \bar{x}_{n\times_{1}}$    $C_{n\times n}  \bar{x}_{n\times1}=D_{n\times n}\cdot  \bar{x}_{n\times1}$
Возьмём:
$$\bar{x}_{n\times1}=\begin{pmatrix}1 \\ 0 \\ 0 \\ \vdots \\ 0\end{pmatrix}$$
$$
\begin{pmatrix}
C_{11} \\
C_{21} \\
\vdots \\
C_{n_{1}}
\end{pmatrix}=\begin{pmatrix}
D_{11} \\
D_{21} \\
\vdots \\
D_{n_{1}}
\end{pmatrix}
$$Возьмём:
$$\bar{x}_{n\times1}=\begin{pmatrix}1 \\ 0 \\ 0 \\ \vdots \\ 0\end{pmatrix}$$