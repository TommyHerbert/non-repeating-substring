def solve(input):
    start = 0
    record = 0
    indexes = {}
    length = len(input)
    for i in range(length):
        character = input[i]
        if character in indexes:
            match = indexes[character]
            if match >= start:
                record = max(record, i - start)
                start = match + 1
        indexes[character] = i
    return max(record, length - start)

