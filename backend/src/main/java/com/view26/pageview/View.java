package com.view26.pageview;

import net.java.ao.Entity;
import net.java.ao.Preload;
import net.java.ao.schema.Default;
import net.java.ao.schema.NotNull;
import net.java.ao.schema.Table;

@Preload
@Table("View")
public interface View extends Entity {
    @NotNull
    long getViewID();
    void setViewID(long viewID); 

    @NotNull
    String getName();
    void setName(String name);

    @NotNull
    @Default("\"\"")
    String getOwner();
    void setOwner(String owner);
}
