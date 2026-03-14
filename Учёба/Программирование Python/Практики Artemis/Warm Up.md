#Python 

# Задание 1.

```Python
def f(string) -> Bool:
    if (string) != 6:
        raise ValueError("Билет состоит из 6 цифр")
    if '-' in string:
        raise ValueError("Билеты не могу быть отрицательными")
    number = int(string)
    n_b = str(number-1)
    n_b_l = int(n_b[0]) + int(n_b[1]) + int(n_b[2])
    n_b_r = int(n_b[3]) + int(n_b[4]) + int(n_b[5])
    n_a = str(number+1)
    n_a_l = int(n_a[0]) + int(n_a[1]) + int(n_a[2])
    n_a_r = int(n_a[3]) + int(n_a[4]) + int(n_a[5])
    return ((n_b_l == n_b_r) or (n_a_l == n_a_r))
```

# Задание 2.

```Python
def rational_to_decimal(numerator: int, denominator: int, precision: int = 10) -> str:
    if not isinstance(numerator, int) or not isinstance(denominator, int):
        raise ValueError("Числитель и знаменатель должны быть целыми числами")
    if denominator == 0:
        raise ValueError("Знаменатель не может быть нулём")
    answer = ''
    k = 0
    remainders = {}
    if numerator == 0:
        return '0.0'
    # Определение знака
    if (numerator > 0) and (denominator > 0):
        k = 1
    elif (numerator < 0) and (denominator < 0):
        numerator *= -1
        denominator *= -1
        k = 1
    elif (numerator > 0) and (denominator < 0):
        denominator *= -1
        k = -1
    elif (numerator < 0) and (denominator > 0):
        numerator *= -1
        k = -1
    # Целая часть
    if numerator >= denominator:
        integer_part_count = 0
        while numerator >= denominator:
            numerator -= denominator
            integer_part_count += 1
        answer += str(integer_part_count)
    if answer == '':
        answer += '0'
    answer += '.'
    float_steps = 0
    while (float_steps < precision) and (numerator != 0):
        if numerator in remainders:
            index = remainders[numerator]
            answer = answer[:index] + '(' + answer[index:] + ')'
            if k == -1:
                return '-' + answer
            return answer
        remainders[numerator] = len(answer)
        numerator *= 10
        float_part = 0
        while numerator >= denominator:
            numerator -= denominator
            float_part += 1
        answer += str(float_part)
        float_steps += 1
    # если точность закончилась, но остаток не 0 — добавляем ...
    if numerator != 0:
        answer += "..."
    if k == -1:
        return '-' + answer
    return answer
print(rational_to_decimal(1234567,9876543))
```

