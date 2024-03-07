package com.view26;

import com.atlassian.activeobjects.tx.Transactional;

import java.util.List;

@Transactional
public interface TodoService
{
    Todo add(String description);

    List<Todo> all();
}
