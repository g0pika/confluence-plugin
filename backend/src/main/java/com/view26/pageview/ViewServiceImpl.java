package com.view26.pageview;

import com.atlassian.activeobjects.external.ActiveObjects;
import com.atlassian.plugin.spring.scanner.annotation.imports.ComponentImport;

import net.java.ao.Query;
import java.util.List;

import static com.google.common.base.Preconditions.checkNotNull;
import static com.google.common.collect.Lists.newArrayList;

import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired; 

@Component
public class ViewServiceImpl implements ViewService {

    @ComponentImport
    private final ActiveObjects ao;

    @Autowired
    public ViewServiceImpl(ActiveObjects ao) {
        this.ao = checkNotNull(ao);
    }

    @Override
    public View addView(String name, String owner) {
        View view = ao.create(View.class);
        view.setName(name);
        view.setOwner(owner);
        view.save();
        return view;
    }

    @Override
    public List<View> getAllViews() {
        return newArrayList(ao.find(View.class));
    }

    @Override
    public View getView(long viewID) {
        View[] views = ao.find(View.class, Query.select().where("VIEW_ID = ?", viewID));
        return views.length > 0 ? views[0] : null;
    }

    @Override
    public void updateView(long viewID, String newName) {
        View[] views = ao.find(View.class, Query.select().where("VIEW_ID = ?", viewID));
        if (views.length > 0) {
            View view = views[0];
            view.setName(newName);
            view.save();
        }
    }
}
