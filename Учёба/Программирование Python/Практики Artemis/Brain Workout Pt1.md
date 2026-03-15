#Python 

# Задание 1.

```Python
from typing import Union

import math

  

Number = Union[int, float]

  
  

def _validate_input(a1: Number, a2: Number, b1: Number, b2: Number) -> None:

    """

    Validates that all input parameters are numbers.

  

    Args:

        a1: Start point of first segment

        a2: End point of first segment

        b1: Start point of second segment

        b2: End point of second segment

  

    Raises:

        TypeError: If any input is not a number

        ValueError: If any input is NaN or infinity

    """

    values = [a1, a2, b1, b2]

  

    for value in values:

        if isinstance(value, bool) or not isinstance(value, (int, float)):

            raise TypeError("All input values must be numbers")

  

        if math.isnan(value) or math.isinf(value):

            raise ValueError("Input values must not be NaN or infinity")

  
  

def check_intersection(a1: Number, a2: Number, b1: Number, b2: Number) -> bool:

    """

    Checks if two line segments A(a1, a2) and B(b1, b2) intersect.

    Segments are considered intersecting if they share at least one point.

    Args:

        a1: Start point of first segment

        a2: End point of first segment

        b1: Start point of second segment

        b2: End point of second segment

    Returns:

        True if segments intersect, False otherwise

    Raises:

        TypeError: If any input is not a number

        ValueError: If any input is NaN or infinity

    """

    _validate_input(a1, a2, b1, b2)

  

    left_a = min(a1, a2)

    right_a = max(a1, a2)

    left_b = min(b1, b2)

    right_b = max(b1, b2)

  

    if max(left_a, left_b) <= min(right_a, right_b):

        return True

  

    return False
```

# Задание 2.

```Python
from typing import Tuple

import random

import string

import re

import math

from collections import Counter

  
  

PASSWORD_CRITERIA = {

    # Length-related issues

    'TOO_SHORT': {

        'score': -30,

        'message': 'Password is too short (minimum 8 characters required)',

        'example': 'pass'

    },

    'RECOMMENDED_LONGER': {

        'score': -5,

        'message': 'Password could be stronger with at least 12 characters',

        'example': 'Password10!'

    },

  

    # Character composition

    'NO_UPPERCASE': {

        'score': -10,

        'message': 'Missing uppercase letters',

        'example': 'password123!'

    },

    'NO_LOWERCASE': {

        'score': -10,

        'message': 'Missing lowercase letters',

        'example': 'PASSWORD123!'

    },

    'NO_NUMBERS': {

        'score': -10,

        'message': 'Missing numbers',

        'example': 'Password!'

    },

    'NO_SPECIAL': {

        'score': -10,

        'message': 'Missing special characters',

        'example': 'Password123'

    },

  

    # Patterns and sequences

    'KEYBOARD_PATTERN': {

        'score': -20,

        'message': 'Contains keyboard pattern (e.g., qwerty, asdf)',

        'example': 'qwerty123'

    },

    'NUMERICAL_SEQUENCE': {

        'score': -15,

        'message': 'Contains simple number sequence (e.g., 123, 987)',

        'example': 'Password123'

    },

    'ALPHABETICAL_SEQUENCE': {

        'score': -15,

        'message': 'Contains alphabetical sequence (e.g., abc, xyz)',

        'example': 'Passwordabc!'

    },

    'REPEATED_CHARS': {

        'score': -15,

        'message': 'Contains repeated characters (e.g., aaa, 111)',

        'example': 'Password111!'

    },

  

    # Context and dictionary

    'COMMON_PASSWORD': {

        'score': -50,

        'message': 'Matches commonly used password',

        'example': 'admin'

    },

    'COMMON_WORD': {

        'score': -20,

        'message': 'Contains common dictionary word',

        'example': 'monkey123'

    },

    'YEAR_PATTERN': {

        'score': -15,

        'message': 'Contains year-like pattern',

        'example': 'Password1990!'

    },

  

    # Entropy

    'LOW_ENTROPY': {

        'score': -15,

        'message': 'Low character diversity',

        'example': 'aaaaaa123'

    },

  

    # Positive criteria

    'GOOD_LENGTH': {

        'score': 20,

        'message': 'Good password length',

        'example': 'ThisIsALongPassword123!'

    },

    'HIGH_ENTROPY': {

        'score': 20,

        'message': 'High character diversity',

        'example': 'P@s$w0rd#123'

    }

}

  
  

SAFE_POOLS = {

    'upper': 'ABCDEFGHJKMNPQRSTUVWXYZ',

    'lower': 'abcdefghijkmnopqrstuvwxyz',

    'digit': '23456789',

    'special': '!@#$%^&*?-_=+'

}

  

COMMON_PASSWORDS = {

    'password',

    'admin',

    'qwerty',

    'letmein',

    'welcome',

    'dragon',

    'iloveyou',

    'monkey',

    '123456',

    '12345678'

}

  

COMMON_WORDS = [

    'password',

    'admin',

    'monkey',

    'dragon',

    'welcome',

    'qwerty',

    'login',

    'user',

    'test'

]

  

FULL_POOLS = {

    'upper': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',

    'lower': 'abcdefghijklmnopqrstuvwxyz',

    'digit': '0123456789',

    'special': '!@#$%^&*?-_=+'

}

  

GENERATED_TWINS = {}

  
  

def _get_char_type(symbol: str) -> str:

    if symbol.isupper():

        return 'upper'

    if symbol.islower():

        return 'lower'

    if symbol.isdigit():

        return 'digit'

    return 'special'

  
  

def _has_numerical_sequence(password: str) -> bool:

    for index in range(len(password) - 2):

        piece = password[index:index + 3]

        if piece.isdigit():

            first = int(piece[0])

            second = int(piece[1])

            third = int(piece[2])

            if second == first + 1 and third == second + 1:

                return True

            if second == first - 1 and third == second - 1:

                return True

    return False

  
  

def _has_alphabetical_sequence(password: str) -> bool:

    lower_password = password.lower()

  

    for index in range(len(lower_password) - 2):

        piece = lower_password[index:index + 3]

        if piece.isalpha():

            first = ord(piece[0])

            second = ord(piece[1])

            third = ord(piece[2])

            if second == first + 1 and third == second + 1:

                return True

            if second == first - 1 and third == second - 1:

                return True

    return False

  
  

def _has_keyboard_pattern(password: str) -> bool:

    lower_password = password.lower()

    keyboard_patterns = [

        'qwertyuiop',

        'asdfghjkl',

        'zxcvbnm',

        'poiuytrewq',

        'lkjhgfdsa',

        'mnbvcxz'

    ]

  

    for pattern in keyboard_patterns:

        for index in range(len(lower_password) - 2):

            piece = lower_password[index:index + 3]

            if piece in pattern:

                return True

  

    return False

  
  

def _get_digit_shift(password: str) -> int:

    digits = []

  

    for symbol in password:

        if symbol.isdigit():

            digits.append(int(symbol))

  

    possible_shifts = []

  

    for shift in range(-9, 10):

        if shift != 0:

            can_use_shift = True

  

            for digit in digits:

                new_digit = digit + shift

                if new_digit < 0 or new_digit > 9:

                    can_use_shift = False

                    break

  

            if can_use_shift:

                possible_shifts.append(shift)

  

    if possible_shifts:

        return random.choice(possible_shifts)

  

    return random.randint(1, 9)

  
  

def calculate_entropy(password: str) -> float:

    """

    Calculate Shannon entropy of the password.

  

    Args:

        password: Input password string

  

    Returns:

        Float value representing password entropy

    """

    if password == '':

        return 0.0

  

    counts = Counter(password)

    password_length = len(password)

    entropy = 0.0

  

    for count in counts.values():

        probability = count / password_length

        entropy = entropy - probability * math.log2(probability)

  

    return entropy

  
  

def detect_patterns(password: str) -> list[str]:

    """

    Detect various patterns in the password.

  

    Args:

        password: Input password string

  

    Returns:

        List of detected pattern types from PASSWORD_CRITERIA keys

    """

    found_patterns = []

    lower_password = password.lower()

  

    if len(password) < 8:

        found_patterns.append('TOO_SHORT')

    elif len(password) < 12:

        found_patterns.append('RECOMMENDED_LONGER')

  

    if not re.search(r'[A-Z]', password):

        found_patterns.append('NO_UPPERCASE')

  

    if not re.search(r'[a-z]', password):

        found_patterns.append('NO_LOWERCASE')

  

    if not re.search(r'\d', password):

        found_patterns.append('NO_NUMBERS')

  

    if not re.search(r'[^A-Za-z0-9]', password):

        found_patterns.append('NO_SPECIAL')

  

    if _has_keyboard_pattern(password):

        found_patterns.append('KEYBOARD_PATTERN')

  

    if _has_numerical_sequence(password):

        found_patterns.append('NUMERICAL_SEQUENCE')

  

    if _has_alphabetical_sequence(password):

        found_patterns.append('ALPHABETICAL_SEQUENCE')

  

    if re.search(r'(.)\1\1', password):

        found_patterns.append('REPEATED_CHARS')

  

    if lower_password in COMMON_PASSWORDS:

        found_patterns.append('COMMON_PASSWORD')

  

    for word in COMMON_WORDS:

        if word in lower_password and 'COMMON_WORD' not in found_patterns:

            found_patterns.append('COMMON_WORD')

  

    if re.search(r'(19\d{2}|20\d{2})', password):

        found_patterns.append('YEAR_PATTERN')

  

    if calculate_entropy(password) < 2.5:

        found_patterns.append('LOW_ENTROPY')

  

    return found_patterns

  
  

def get_structural_fingerprint(password: str) -> dict:

    """

    Create a structural fingerprint of the password.

  

    Args:

        password: Input password string

  

    Returns:

        Dictionary containing:

            - character_types: List of character type by position (upper, lower, digit, special)

            - length: Password length

            - uppercase_positions: List of uppercase letter positions

            - special_positions: List of special character positions

            - number_positions: List of number positions

    """

    character_types = []

    uppercase_positions = []

    special_positions = []

    number_positions = []

  

    for index, symbol in enumerate(password):

        symbol_type = _get_char_type(symbol)

        character_types.append(symbol_type)

  

        if symbol.isupper():

            uppercase_positions.append(index)

        elif symbol.isdigit():

            number_positions.append(index)

        elif not symbol.islower():

            special_positions.append(index)

  

    return {

        'character_types': character_types,

        'length': len(password),

        'uppercase_positions': uppercase_positions,

        'special_positions': special_positions,

        'number_positions': number_positions

    }

  
  

def assess_password(password: str) -> Tuple[int, list[str]]:

    """

    Assess password strength and return tuple of score and vulnerability descriptions.

  

    Args:

        password: Input password string

  

    Returns:

        Tuple containing:

            - Score

            - List of strings describing vulnerabilities found

    """

    if not isinstance(password, str):

        raise TypeError('Password must be a string')

  

    score = 0

    issues = []

    found_patterns = detect_patterns(password)

  

    ordered_patterns = [

        'TOO_SHORT',

        'RECOMMENDED_LONGER',

        'NO_UPPERCASE',

        'NO_LOWERCASE',

        'NO_NUMBERS',

        'NO_SPECIAL',

        'KEYBOARD_PATTERN',

        'NUMERICAL_SEQUENCE',

        'ALPHABETICAL_SEQUENCE',

        'REPEATED_CHARS',

        'YEAR_PATTERN'

    ]

  

    for pattern in ordered_patterns:

        if pattern in found_patterns:

            score = score + PASSWORD_CRITERIA[pattern]['score']

            issues.append(PASSWORD_CRITERIA[pattern]['message'])

  

    if 'LOW_ENTROPY' in found_patterns:

        score = score + PASSWORD_CRITERIA['LOW_ENTROPY']['score']

        issues.append(PASSWORD_CRITERIA['LOW_ENTROPY']['message'])

  

    if calculate_entropy(password) >= 2.5:

        score = score + PASSWORD_CRITERIA['HIGH_ENTROPY']['score']

        issues.append(PASSWORD_CRITERIA['HIGH_ENTROPY']['message'])

  

    for pattern in ['COMMON_PASSWORD', 'COMMON_WORD']:

        if pattern in found_patterns:

            score = score + PASSWORD_CRITERIA[pattern]['score']

            issues.append(PASSWORD_CRITERIA[pattern]['message'])

  

    if len(password) >= 12:

        score = score + PASSWORD_CRITERIA['GOOD_LENGTH']['score']

        issues.append(PASSWORD_CRITERIA['GOOD_LENGTH']['message'])

  

    return score, issues

  
  

def generate_twin(password: str) -> str:

    """

    Generate a new password with the same structural complexity as the input password.

  

    Args:

        password: Original password to base the twin on

  

    Returns:

        New password with different characters and same structure

    """

    if not isinstance(password, str):

        raise TypeError('Password must be a string')

  

    if password == '':

        return ''

  

    structural_fingerprint = get_structural_fingerprint(password)

    original_score = assess_password(password)[0]

    if password not in GENERATED_TWINS:

        GENERATED_TWINS[password] = set()

  

    twin_password = ''

    attempts = 0

  

    while attempts < 100:

        shifts = {}

  

        for symbol_type in ['upper', 'lower', 'digit', 'special']:

            if symbol_type in structural_fingerprint['character_types']:

                if symbol_type == 'digit':

                    shifts[symbol_type] = _get_digit_shift(password)

                else:

                    shifts[symbol_type] = random.randint(1, len(FULL_POOLS[symbol_type]) - 1)

  

        replacements = {}

        twin_password_list = []

  

        for index in range(structural_fingerprint['length']):

            original_symbol = password[index]

            symbol_type = structural_fingerprint['character_types'][index]

  

            if original_symbol not in replacements:

                if symbol_type == 'digit':

                    replacements[original_symbol] = str(int(original_symbol) + shifts[symbol_type])

                elif original_symbol in FULL_POOLS[symbol_type]:

                    symbol_index = FULL_POOLS[symbol_type].index(original_symbol)

                    new_index = symbol_index + shifts[symbol_type]

                    new_index = new_index % len(FULL_POOLS[symbol_type])

                    replacements[original_symbol] = FULL_POOLS[symbol_type][new_index]

                else:

                    available_symbols = []

                    for candidate in SAFE_POOLS[symbol_type]:

                        if candidate != original_symbol:

                            available_symbols.append(candidate)

                    replacements[original_symbol] = random.choice(available_symbols)

  

            twin_password_list.append(replacements[original_symbol])

  

        twin_password = ''.join(twin_password_list)

        twin_score = assess_password(twin_password)[0]

  

        if twin_password != password and twin_password not in GENERATED_TWINS[password] and abs(twin_score - original_score) <= 20:

            break

        attempts = attempts + 1

  

    GENERATED_TWINS[password].add(twin_password)

    return twin_password
```

