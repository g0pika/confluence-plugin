package com.view26.pageview;

import com.atlassian.activeobjects.tx.Transactional;
import java.util.List;

@Transactional
public interface ViewService {
 
    View addView(String name, String owner);

    List<View> getAllViews();

    View getView(long viewID);

    void updateView(long viewID, String newName);
}
