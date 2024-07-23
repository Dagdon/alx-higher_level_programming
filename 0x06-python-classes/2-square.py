#!/usr/bin/python3
"""Module that defines a Square class."""


class Square:
    """Defines a square by its size."""

    def __init__(self, size=0):
        """Initialize a new Square.

        Args:
            size (int): The size of the new square.
        """
        if not isinstance(size, int):
            raise TypeError("Not an instance.")
        elif size < 0:
            raise ValueError("size must be >= 0")
        self.__size = size
